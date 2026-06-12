import { FirebaseError } from 'firebase/app';
import { onAuthStateChanged, type User } from 'firebase/auth';
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  where,
  type QueryDocumentSnapshot,
} from 'firebase/firestore';
import { Clock, Save } from 'lucide-react';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { StatusBadge } from '../components/StatusBadge';
import { auth, db } from '../lib/firebase';

type MatchStatus = 'upcoming' | 'closed' | 'finished';

type Match = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  startsAt: Date;
  phase: string;
  status: MatchStatus;
  homeScore: number | null;
  awayScore: number | null;
};

type Prediction = {
  id: string;
  userId: string;
  matchId: string;
  homeScore: number;
  awayScore: number;
  points: number;
};

type PredictionInput = {
  homeScore: string;
  awayScore: string;
};

const emptyPredictionInput: PredictionInput = {
  homeScore: '',
  awayScore: '',
};

export function Jogos() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoaded, setAuthLoaded] = useState(false);
  const [matches, setMatches] = useState<Match[]>([]);
  const [predictions, setPredictions] = useState<Record<string, Prediction>>({});
  const [predictionInputs, setPredictionInputs] = useState<Record<string, PredictionInput>>({});
  const [isLoadingMatches, setIsLoadingMatches] = useState(true);
  const [savingMatchId, setSavingMatchId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<Record<string, { type: 'success' | 'error'; message: string }>>({});
  const [pageError, setPageError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoaded(true);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const matchesQuery = query(collection(db, 'matches'), orderBy('startsAt', 'asc'));

    const unsubscribe = onSnapshot(
      matchesQuery,
      (snapshot) => {
        setMatches(snapshot.docs.map(mapMatchDocument));
        setIsLoadingMatches(false);
        setPageError('');
      },
      () => {
        setPageError('Não foi possível carregar os jogos em tempo real.');
        setIsLoadingMatches(false);
      },
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) {
      setPredictions({});
      setPredictionInputs({});
      return;
    }

    const predictionsQuery = query(
      collection(db, 'predictions'),
      where('userId', '==', user.uid),
    );

    const unsubscribe = onSnapshot(
      predictionsQuery,
      (snapshot) => {
        const nextPredictions: Record<string, Prediction> = {};
        const nextInputs: Record<string, PredictionInput> = {};

        snapshot.docs.forEach((predictionDocument) => {
          const prediction = mapPredictionDocument(predictionDocument);
          nextPredictions[prediction.matchId] = prediction;
          nextInputs[prediction.matchId] = {
            homeScore: String(prediction.homeScore),
            awayScore: String(prediction.awayScore),
          };
        });

        setPredictions(nextPredictions);
        setPredictionInputs((currentInputs) => ({
          ...currentInputs,
          ...nextInputs,
        }));
      },
      () => {
        setPageError('Não foi possível carregar seus palpites em tempo real.');
      },
    );

    return unsubscribe;
  }, [user]);

  const hasMatches = useMemo(() => matches.length > 0, [matches]);

  function handleInputChange(matchId: string, field: keyof PredictionInput, value: string) {
    setPredictionInputs((currentInputs) => ({
      ...currentInputs,
      [matchId]: {
        ...(currentInputs[matchId] ?? emptyPredictionInput),
        [field]: value,
      },
    }));
  }

  async function handleSavePrediction(event: FormEvent<HTMLFormElement>, match: Match) {
    event.preventDefault();

    if (!user) {
      setFeedbackMessage(match.id, 'error', 'Entre com seu usuário para salvar o palpite.');
      return;
    }

    if (isPredictionBlocked(match)) {
      setFeedbackMessage(match.id, 'error', 'Os palpites deste jogo estão encerrados.');
      return;
    }

    const input = predictionInputs[match.id] ?? emptyPredictionInput;
    const homeScore = Number(input.homeScore);
    const awayScore = Number(input.awayScore);

    if (!Number.isInteger(homeScore) || !Number.isInteger(awayScore) || homeScore < 0 || awayScore < 0) {
      setFeedbackMessage(match.id, 'error', 'Informe placares válidos.');
      return;
    }

    const predictionId = `${user.uid}_${match.id}`;
    const predictionRef = doc(db, 'predictions', predictionId);
    const existingPrediction = predictions[match.id];

    setSavingMatchId(match.id);

    try {
      await setDoc(
        predictionRef,
        {
          id: predictionId,
          userId: user.uid,
          matchId: match.id,
          homeScore,
          awayScore,
          points: existingPrediction?.points ?? 0,
          ...(existingPrediction ? {} : { createdAt: serverTimestamp() }),
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      );

      setFeedbackMessage(match.id, 'success', 'Palpite salvo com sucesso.');
    } catch (caughtError) {
      if (caughtError instanceof FirebaseError) {
        setFeedbackMessage(match.id, 'error', getSaveErrorMessage(caughtError.code));
      } else {
        setFeedbackMessage(match.id, 'error', 'Não foi possível salvar o palpite.');
      }
    } finally {
      setSavingMatchId(null);
    }
  }

  return (
    <div className="page-shell">
      <PageHeader
        title="Jogos"
        description="Consulte a tabela e registre seu palpite antes do encerramento de cada jogo."
      />

      {!authLoaded || isLoadingMatches ? (
        <div className="panel p-5 text-sm font-semibold text-slate-600">Carregando jogos...</div>
      ) : null}

      {pageError ? (
        <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {pageError}
        </div>
      ) : null}

      {authLoaded && !user ? (
        <div className="panel mb-4 p-5">
          <p className="text-sm font-semibold text-slate-700">
            Entre com seu usuário para registrar e editar seus palpites.
          </p>
          <Link className="primary-button mt-4" to="/login">
            Entrar
          </Link>
        </div>
      ) : null}

      {authLoaded && !isLoadingMatches && !hasMatches ? (
        <div className="panel p-5 text-sm font-semibold text-slate-600">
          Nenhum jogo cadastrado ainda.
        </div>
      ) : null}

      <section className="grid gap-4">
        {matches.map((match) => {
          const blocked = isPredictionBlocked(match);
          const input = predictionInputs[match.id] ?? emptyPredictionInput;
          const matchFeedback = feedback[match.id];
          const isSaving = savingMatchId === match.id;

          return (
            <article key={match.id} className="panel overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sofia-green/10 px-4 py-3">
                <div>
                  <p className="text-xs font-black uppercase text-sofia-gold">{match.phase}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600">
                    <Clock aria-hidden size={15} />
                    {formatDateTime(match.startsAt)}
                  </p>
                </div>
                {blocked ? (
                  <StatusBadge tone="neutral">Palpites encerrados</StatusBadge>
                ) : (
                  <StatusBadge tone="green">Palpite aberto</StatusBadge>
                )}
              </div>

              <div className="grid gap-5 p-4 lg:grid-cols-[1fr_23rem] lg:items-center">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
                  <strong className="text-lg text-sofia-green sm:text-xl">{match.homeTeam}</strong>
                  <span className="rounded-md bg-sofia-cream px-3 py-2 text-sm font-black text-sofia-green">
                    {match.status === 'finished' ? `${match.homeScore ?? 0} x ${match.awayScore ?? 0}` : 'x'}
                  </span>
                  <strong className="text-lg text-sofia-green sm:text-xl">{match.awayTeam}</strong>
                </div>

                <form className="grid gap-3" onSubmit={(event) => handleSavePrediction(event, match)}>
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                    <input
                      aria-label={`Gols ${match.homeTeam}`}
                      className="field h-10 text-center"
                      disabled={blocked || !user || isSaving}
                      inputMode="numeric"
                      min={0}
                      onChange={(event) => handleInputChange(match.id, 'homeScore', event.target.value)}
                      placeholder="0"
                      type="number"
                      value={input.homeScore}
                    />
                    <span className="font-black text-sofia-green">x</span>
                    <input
                      aria-label={`Gols ${match.awayTeam}`}
                      className="field h-10 text-center"
                      disabled={blocked || !user || isSaving}
                      inputMode="numeric"
                      min={0}
                      onChange={(event) => handleInputChange(match.id, 'awayScore', event.target.value)}
                      placeholder="0"
                      type="number"
                      value={input.awayScore}
                    />
                  </div>

                  <button
                    className="primary-button h-10 px-3 disabled:cursor-not-allowed disabled:opacity-70"
                    disabled={blocked || !user || isSaving}
                    title="Salvar palpite"
                    type="submit"
                  >
                    <Save aria-hidden size={17} />
                    {isSaving ? 'Salvando...' : 'Salvar Palpite'}
                  </button>

                  {matchFeedback ? (
                    <p
                      className={[
                        'rounded-md px-3 py-2 text-sm font-semibold',
                        matchFeedback.type === 'success'
                          ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                          : 'border border-red-200 bg-red-50 text-red-700',
                      ].join(' ')}
                    >
                      {matchFeedback.message}
                    </p>
                  ) : null}
                </form>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );

  function setFeedbackMessage(matchId: string, type: 'success' | 'error', message: string) {
    setFeedback((currentFeedback) => ({
      ...currentFeedback,
      [matchId]: { type, message },
    }));
  }
}

function mapMatchDocument(matchDocument: QueryDocumentSnapshot): Match {
  const data = matchDocument.data();
  const startsAt = data.startsAt instanceof Timestamp ? data.startsAt.toDate() : new Date(data.startsAt);

  return {
    id: matchDocument.id,
    homeTeam: String(data.homeTeam ?? ''),
    awayTeam: String(data.awayTeam ?? ''),
    startsAt,
    phase: String(data.phase ?? 'Fase não informada'),
    status: parseMatchStatus(data.status),
    homeScore: parseNullableScore(data.homeScore),
    awayScore: parseNullableScore(data.awayScore),
  };
}

function mapPredictionDocument(predictionDocument: QueryDocumentSnapshot): Prediction {
  const data = predictionDocument.data();

  return {
    id: predictionDocument.id,
    userId: String(data.userId ?? ''),
    matchId: String(data.matchId ?? ''),
    homeScore: Number(data.homeScore ?? 0),
    awayScore: Number(data.awayScore ?? 0),
    points: Number(data.points ?? 0),
  };
}

function parseMatchStatus(status: unknown): MatchStatus {
  if (status === 'closed' || status === 'finished') {
    return status;
  }

  return 'upcoming';
}

function parseNullableScore(score: unknown) {
  return typeof score === 'number' ? score : null;
}

function isPredictionBlocked(match: Match) {
  return match.startsAt.getTime() <= Date.now() || match.status === 'closed' || match.status === 'finished';
}

function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date);
}

function getSaveErrorMessage(code: string) {
  if (code === 'permission-denied') {
    return 'Você não tem permissão para salvar este palpite.';
  }

  return 'Não foi possível salvar o palpite.';
}
