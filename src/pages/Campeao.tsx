import { doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { Crown, Save } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { StatusBadge } from '../components/StatusBadge';
import {
  CHAMPION_PREDICTION_DEADLINE,
  CHAMPION_PREDICTION_POINTS,
  CHAMPION_TEAMS,
  isChampionPredictionClosed,
} from '../config/championPrediction';
import { useAuth } from '../hooks/useAuth';
import { db } from '../lib/firebase';

type ChampionPrediction = {
  id: string;
  championTeam: string;
};

export function Campeao() {
  const { user, profile, isLoadingAuth } = useAuth();
  const [prediction, setPrediction] = useState<ChampionPrediction | null>(null);
  const [championTeam, setChampionTeam] = useState('');
  const [isLoadingPrediction, setIsLoadingPrediction] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const isClosed = isChampionPredictionClosed();

  useEffect(() => {
    if (!user) {
      setPrediction(null);
      setChampionTeam('');
      setIsLoadingPrediction(false);
      return;
    }

    setIsLoadingPrediction(true);

    const unsubscribe = onSnapshot(
      doc(db, 'champion_predictions', user.uid),
      (snapshot) => {
        const data = snapshot.data();

        if (data) {
          const nextPrediction = {
            id: snapshot.id,
            championTeam: String(data.championTeam ?? ''),
          };

          setPrediction(nextPrediction);
          setChampionTeam(nextPrediction.championTeam);
        } else {
          setPrediction(null);
          setChampionTeam('');
        }

        setIsLoadingPrediction(false);
      },
      () => {
        setFeedback({ type: 'error', message: 'Não foi possível carregar seu palpite de campeão.' });
        setIsLoadingPrediction(false);
      },
    );

    return unsubscribe;
  }, [user]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(null);

    if (!user) {
      setFeedback({ type: 'error', message: 'Entre com seu usuário para salvar o palpite.' });
      return;
    }

    if (isClosed) {
      setFeedback({ type: 'error', message: 'O prazo para alterar o palpite de campeão foi encerrado.' });
      return;
    }

    if (!championTeam) {
      setFeedback({ type: 'error', message: 'Escolha uma seleção campeã.' });
      return;
    }

    setIsSaving(true);

    try {
      await setDoc(
        doc(db, 'champion_predictions', user.uid),
        {
          id: user.uid,
          userId: user.uid,
          userName: profile?.name || user.displayName || user.email || 'Participante',
          championTeam,
          ...(prediction ? {} : { createdAt: serverTimestamp() }),
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      );

      setFeedback({ type: 'success', message: 'Palpite de campeão salvo com sucesso.' });
    } catch {
      setFeedback({ type: 'error', message: 'Não foi possível salvar o palpite de campeão.' });
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="page-shell">
      <PageHeader
        title="Campeão"
        description={`Escolha quem será o grande campeão da Copa 2026. Esse palpite vale ${CHAMPION_PREDICTION_POINTS} pontos.`}
      />

      {!isLoadingAuth && !user ? (
        <div className="panel p-5">
          <p className="text-sm font-semibold text-slate-700">
            Entre com seu usuário para registrar seu palpite de campeão.
          </p>
          <Link className="primary-button mt-4" to="/login">
            Entrar
          </Link>
        </div>
      ) : null}

      {isLoadingAuth || isLoadingPrediction ? (
        <div className="panel p-5 text-sm font-semibold text-slate-600">Carregando palpite...</div>
      ) : null}

      {user && !isLoadingPrediction ? (
        <section className="panel p-5">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-sofia-gold/25 text-sofia-green">
                <Crown aria-hidden size={22} />
              </span>
              <div>
                <h2 className="text-lg font-black text-sofia-green">Meu campeão</h2>
                <p className="text-sm text-slate-600">
                  Prazo: {formatDateTime(CHAMPION_PREDICTION_DEADLINE)}
                </p>
              </div>
            </div>
            <StatusBadge tone={isClosed ? 'neutral' : 'green'}>
              {isClosed ? 'Palpite encerrado' : 'Palpite aberto'}
            </StatusBadge>
          </div>

          {isClosed ? (
            <p className="mb-4 rounded-md border border-sofia-green/10 bg-sofia-cream px-3 py-2 text-sm font-semibold text-slate-700">
              O prazo foi encerrado. Sua escolha não pode mais ser alterada.
            </p>
          ) : null}

          <form className="grid gap-4 sm:grid-cols-[1fr_auto]" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-sofia-green">Seleção campeã</span>
              <select
                className="field"
                disabled={isClosed || isSaving}
                value={championTeam}
                onChange={(event) => setChampionTeam(event.target.value)}
                required
              >
                <option value="" disabled>
                  Selecione
                </option>
                {CHAMPION_TEAMS.map((team) => (
                  <option key={team} value={team}>
                    {team}
                  </option>
                ))}
              </select>
            </label>

            <button
              className="primary-button self-end disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isClosed || isSaving}
              type="submit"
            >
              <Save aria-hidden size={17} />
              {isSaving ? 'Salvando...' : 'Salvar palpite'}
            </button>
          </form>

          {feedback ? (
            <p
              className={[
                'mt-4 rounded-md px-3 py-2 text-sm font-semibold',
                feedback.type === 'success'
                  ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                  : 'border border-red-200 bg-red-50 text-red-700',
              ].join(' ')}
            >
              {feedback.message}
            </p>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}

function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date);
}
