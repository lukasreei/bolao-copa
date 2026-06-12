import { FirebaseError } from 'firebase/app';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  where,
  writeBatch,
  type QueryDocumentSnapshot,
} from 'firebase/firestore';
import { CalendarPlus, Crown, Database, Pencil, RotateCcw, Save, Trash2, UploadCloud, X } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { StatusBadge } from '../components/StatusBadge';
import { CHAMPION_PREDICTION_POINTS, CHAMPION_TEAMS } from '../config/championPrediction';
import { worldCup2026Matches } from '../data/worldCup2026Matches';
import { useAuth } from '../hooks/useAuth';
import { db } from '../lib/firebase';
import { calculatePredictionPoints, isExactScore, isWinnerHit } from '../lib/scoring';

type MatchStatus = 'upcoming' | 'closed' | 'finished';

type Match = {
  id: string;
  code?: string;
  homeTeam: string;
  awayTeam: string;
  startsAt: Date;
  phase: string;
  status: MatchStatus;
  homeScore: number | null;
  awayScore: number | null;
};

type MatchForm = {
  homeTeam: string;
  awayTeam: string;
  startsAt: string;
  phase: string;
  status: MatchStatus;
  homeScore: string;
  awayScore: string;
};

type Prediction = {
  id: string;
  userId: string;
  matchId: string;
  homeScore: number;
  awayScore: number;
  points: number;
};

type ChampionPrediction = {
  championTeam: string;
};

const initialForm: MatchForm = {
  homeTeam: '',
  awayTeam: '',
  startsAt: '',
  phase: '',
  status: 'upcoming',
  homeScore: '',
  awayScore: '',
};

export function Admin() {
  const { isAdmin, isLoadingAuth } = useAuth();
  const [matches, setMatches] = useState<Match[]>([]);
  const [form, setForm] = useState<MatchForm>(initialForm);
  const [editingMatchId, setEditingMatchId] = useState<string | null>(null);
  const [isLoadingMatches, setIsLoadingMatches] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isImportingMatches, setIsImportingMatches] = useState(false);
  const [isSavingChampion, setIsSavingChampion] = useState(false);
  const [officialChampion, setOfficialChampion] = useState('');
  const [officialChampionInput, setOfficialChampionInput] = useState('');
  const [recalculatingMatchId, setRecalculatingMatchId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    if (!isAdmin) {
      return;
    }

    const matchesQuery = query(collection(db, 'matches'), orderBy('startsAt', 'asc'));
    const unsubscribe = onSnapshot(
      matchesQuery,
      (snapshot) => {
        setMatches(snapshot.docs.map(mapMatchDocument));
        setIsLoadingMatches(false);
      },
      () => {
        setFeedback({ type: 'error', message: 'Não foi possível carregar os jogos.' });
        setIsLoadingMatches(false);
      },
    );

    return unsubscribe;
  }, [isAdmin]);

  useEffect(() => {
    if (!isAdmin) {
      return;
    }

    const unsubscribe = onSnapshot(
      doc(db, 'system_settings', 'world_cup_2026'),
      (snapshot) => {
        const champion = String(snapshot.data()?.officialChampion ?? '');
        setOfficialChampion(champion);
        setOfficialChampionInput(champion);
      },
      () => {
        setFeedback({ type: 'error', message: 'Não foi possível carregar o campeão oficial.' });
      },
    );

    return unsubscribe;
  }, [isAdmin]);

  if (isLoadingAuth) {
    return (
      <div className="page-shell">
        <div className="panel p-5 text-sm font-semibold text-slate-600">Carregando permissões...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(null);

    const parsedMatch = parseMatchForm(form);

    if (!parsedMatch) {
      setFeedback({ type: 'error', message: 'Preencha os dados do jogo corretamente.' });
      return;
    }

    if (
      form.status === 'finished' &&
      (parsedMatch.homeScore === null || parsedMatch.awayScore === null)
    ) {
      setFeedback({ type: 'error', message: 'Informe o placar final antes de finalizar o jogo.' });
      return;
    }

    setIsSubmitting(true);

    try {
      let savedMatchId = editingMatchId;

      if (editingMatchId) {
        await setDoc(
          doc(db, 'matches', editingMatchId),
          {
            id: editingMatchId,
            ...parsedMatch,
            updatedAt: serverTimestamp(),
          },
          { merge: true },
        );
      } else {
        const matchRef = doc(collection(db, 'matches'));
        savedMatchId = matchRef.id;

        await setDoc(matchRef, {
          id: matchRef.id,
          ...parsedMatch,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }

      const savedMatch = savedMatchId ? { id: savedMatchId, ...parsedMatch } : null;

      if (savedMatch && isFinishedWithScore(savedMatch)) {
        await recalculateMatchScore(savedMatch);
        setFeedback({ type: 'success', message: 'Jogo salvo e pontuação recalculada com sucesso.' });
      } else {
        setFeedback({ type: 'success', message: 'Jogo salvo com sucesso.' });
      }

      resetForm();
    } catch (caughtError) {
      if (caughtError instanceof FirebaseError) {
        setFeedback({ type: 'error', message: getAdminErrorMessage(caughtError.code) });
      } else {
        setFeedback({ type: 'error', message: 'Não foi possível salvar o jogo.' });
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleEdit(match: Match) {
    setEditingMatchId(match.id);
    setForm({
      homeTeam: match.homeTeam,
      awayTeam: match.awayTeam,
      startsAt: toDatetimeLocalValue(match.startsAt),
      phase: match.phase,
      status: match.status,
      homeScore: match.homeScore === null ? '' : String(match.homeScore),
      awayScore: match.awayScore === null ? '' : String(match.awayScore),
    });
    setFeedback(null);
  }

  async function handleDelete(match: Match) {
    const confirmed = window.confirm(`Excluir o jogo ${match.homeTeam} x ${match.awayTeam}?`);

    if (!confirmed) {
      return;
    }

    try {
      await deleteDoc(doc(db, 'matches', match.id));

      if (editingMatchId === match.id) {
        resetForm();
      }

      setFeedback({ type: 'success', message: 'Jogo excluído com sucesso.' });
    } catch (caughtError) {
      if (caughtError instanceof FirebaseError) {
        setFeedback({ type: 'error', message: getAdminErrorMessage(caughtError.code) });
      } else {
        setFeedback({ type: 'error', message: 'Não foi possível excluir o jogo.' });
      }
    }
  }

  async function handleImportWorldCupMatches() {
    setFeedback(null);

    if (matches.length > 0) {
      const confirmed = window.confirm(
        'Já existem jogos cadastrados. Importar agora vai adicionar somente jogos que ainda não existem. Continuar?',
      );

      if (!confirmed) {
        return;
      }
    }

    setIsImportingMatches(true);

    try {
      const importedCount = await importWorldCupMatches(false);
      setFeedback({
        type: 'success',
        message: `${importedCount} jogos foram importados.`,
      });
    } catch (caughtError) {
      if (caughtError instanceof FirebaseError) {
        setFeedback({ type: 'error', message: getAdminErrorMessage(caughtError.code) });
      } else {
        setFeedback({ type: 'error', message: 'Não foi possível importar os jogos.' });
      }
    } finally {
      setIsImportingMatches(false);
    }
  }

  async function handleResetWorldCupMatches() {
    setFeedback(null);

    const confirmed = window.confirm(
      'Limpar todos os jogos cadastrados e importar novamente os 104 jogos da Copa 2026?',
    );

    if (!confirmed) {
      return;
    }

    setIsImportingMatches(true);

    try {
      const importedCount = await importWorldCupMatches(true);
      resetForm();
      setFeedback({
        type: 'success',
        message: `${importedCount} jogos foram importados após limpar a tabela.`,
      });
    } catch (caughtError) {
      if (caughtError instanceof FirebaseError) {
        setFeedback({ type: 'error', message: getAdminErrorMessage(caughtError.code) });
      } else {
        setFeedback({ type: 'error', message: 'Não foi possível limpar e importar os jogos.' });
      }
    } finally {
      setIsImportingMatches(false);
    }
  }

  async function importWorldCupMatches(clearFirst: boolean) {
    const matchesSnapshot = await getDocs(collection(db, 'matches'));
    const existingCodes = new Set(
      matchesSnapshot.docs.map((matchDocument) => String(matchDocument.data().code ?? matchDocument.id)),
    );
    const commits: Promise<void>[] = [];
    let batch = writeBatch(db);
    let operationCount = 0;
    let importedCount = 0;

    const commitIfFull = () => {
      if (operationCount < 450) {
        return;
      }

      commits.push(batch.commit());
      batch = writeBatch(db);
      operationCount = 0;
    };

    if (clearFirst) {
      matchesSnapshot.docs.forEach((matchDocument) => {
        batch.delete(doc(db, 'matches', matchDocument.id));
        operationCount += 1;
        commitIfFull();
      });
    }

    worldCup2026Matches.forEach((match) => {
      if (!clearFirst && existingCodes.has(match.code)) {
        return;
      }

      batch.set(doc(db, 'matches', match.code), {
        ...match,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      operationCount += 1;
      commitIfFull();
      importedCount += 1;
    });

    if (operationCount > 0) {
      commits.push(batch.commit());
    }

    await Promise.all(commits);

    return importedCount;
  }

  async function handleRecalculate(match: Match) {
    setFeedback(null);

    if (!isFinishedWithScore(match)) {
      setFeedback({ type: 'error', message: 'Informe o placar final antes de recalcular.' });
      return;
    }

    setRecalculatingMatchId(match.id);

    try {
      await recalculateMatchScore(match);
      setFeedback({ type: 'success', message: 'Pontuação recalculada com sucesso.' });
    } catch (caughtError) {
      if (caughtError instanceof FirebaseError) {
        setFeedback({ type: 'error', message: getAdminErrorMessage(caughtError.code) });
      } else {
        setFeedback({ type: 'error', message: 'Não foi possível recalcular a pontuação.' });
      }
    } finally {
      setRecalculatingMatchId(null);
    }
  }

  async function handleSaveOfficialChampion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(null);

    if (!officialChampionInput) {
      setFeedback({ type: 'error', message: 'Selecione o campeão oficial.' });
      return;
    }

    setIsSavingChampion(true);

    try {
      await setDoc(
        doc(db, 'system_settings', 'world_cup_2026'),
        {
          officialChampion: officialChampionInput,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      );

      await recalculateAllUsersScore(officialChampionInput);
      setFeedback({ type: 'success', message: 'Campeão oficial salvo e ranking recalculado.' });
    } catch (caughtError) {
      if (caughtError instanceof FirebaseError) {
        setFeedback({ type: 'error', message: getAdminErrorMessage(caughtError.code) });
      } else {
        setFeedback({ type: 'error', message: 'Não foi possível salvar o campeão oficial.' });
      }
    } finally {
      setIsSavingChampion(false);
    }
  }

  async function recalculateMatchScore(match: Match) {
    const predictionsSnapshot = await getDocs(
      query(collection(db, 'predictions'), where('matchId', '==', match.id)),
    );

    const predictions = predictionsSnapshot.docs.map(mapPredictionDocument);
    const affectedUserIds = Array.from(new Set(predictions.map((prediction) => prediction.userId)));
    const predictionBatch = writeBatch(db);

    predictions.forEach((prediction) => {
      predictionBatch.set(
        doc(db, 'predictions', prediction.id),
        {
          points: calculatePredictionPoints(prediction, match),
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      );
    });

    await predictionBatch.commit();
    await recalculateUsersScore(affectedUserIds, match);
  }

  async function recalculateUsersScore(userIds: string[], updatedMatch: Match) {
    const matchMap = new Map(matches.map((match) => [match.id, match]));
    matchMap.set(updatedMatch.id, updatedMatch);

    await Promise.all(
      userIds.map(async (userId) => {
        const userPredictionsSnapshot = await getDocs(
          query(collection(db, 'predictions'), where('userId', '==', userId)),
        );
        const userPredictions = userPredictionsSnapshot.docs.map(mapPredictionDocument);
        const championPrediction = await getChampionPrediction(userId);
        const totals = calculateUserTotals(userPredictions, matchMap, championPrediction, officialChampion);

        await setDoc(
          doc(db, 'users', userId),
          {
            ...totals,
            updatedAt: serverTimestamp(),
          },
          { merge: true },
        );
      }),
    );
  }

  async function recalculateAllUsersScore(nextOfficialChampion = officialChampion) {
    const usersSnapshot = await getDocs(collection(db, 'users'));
    const userIds = usersSnapshot.docs.map((userDocument) => userDocument.id);
    const matchMap = new Map(matches.map((match) => [match.id, match]));

    await Promise.all(
      userIds.map(async (userId) => {
        const userPredictionsSnapshot = await getDocs(
          query(collection(db, 'predictions'), where('userId', '==', userId)),
        );
        const userPredictions = userPredictionsSnapshot.docs.map(mapPredictionDocument);
        const championPrediction = await getChampionPrediction(userId);
        const totals = calculateUserTotals(userPredictions, matchMap, championPrediction, nextOfficialChampion);

        await setDoc(
          doc(db, 'users', userId),
          {
            ...totals,
            updatedAt: serverTimestamp(),
          },
          { merge: true },
        );
      }),
    );
  }

  async function getChampionPrediction(userId: string): Promise<ChampionPrediction | null> {
    const championPredictionSnapshot = await getDoc(doc(db, 'champion_predictions', userId));
    const data = championPredictionSnapshot.data();

    return data ? { championTeam: String(data.championTeam ?? '') } : null;
  }

  function resetForm() {
    setForm(initialForm);
    setEditingMatchId(null);
  }

  return (
    <div className="page-shell">
      <PageHeader
        title="Admin"
        description="Área para gerenciar jogos, resultados e status do sistema interno de palpites."
      />

      {feedback ? (
        <div
          className={[
            'mb-4 rounded-md px-4 py-3 text-sm font-semibold',
            feedback.type === 'success'
              ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
              : 'border border-red-200 bg-red-50 text-red-700',
          ].join(' ')}
        >
          {feedback.message}
        </div>
      ) : null}

      <section className="panel mb-4 p-5">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-sofia-gold/25 text-sofia-green">
              <Database aria-hidden size={21} />
            </span>
            <div>
              <h2 className="text-lg font-black text-sofia-green">Importação inicial</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Importe os 104 jogos da Copa 2026 ou limpe a tabela para importar novamente.
              </p>
            </div>
          </div>

          <div className="grid gap-2 sm:flex">
            <button
              className="primary-button disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isImportingMatches}
              type="button"
              onClick={handleImportWorldCupMatches}
            >
              <UploadCloud aria-hidden size={17} />
              {isImportingMatches ? 'Importando...' : 'Importar jogos da Copa 2026'}
            </button>
            <button
              className="secondary-button disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isImportingMatches}
              type="button"
              onClick={handleResetWorldCupMatches}
            >
              <RotateCcw aria-hidden size={17} />
              Limpar e importar novamente
            </button>
          </div>
        </div>
      </section>

      <section className="panel mb-4 p-5">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-sofia-gold/25 text-sofia-green">
            <Crown aria-hidden size={21} />
          </span>
          <div>
            <h2 className="text-lg font-black text-sofia-green">Campeão oficial</h2>
            <p className="text-sm text-slate-600">
              Quem acertar recebe {CHAMPION_PREDICTION_POINTS} pontos no ranking.
            </p>
          </div>
        </div>

        <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={handleSaveOfficialChampion}>
          <select
            className="field"
            value={officialChampionInput}
            onChange={(event) => setOfficialChampionInput(event.target.value)}
            required
          >
            <option value="" disabled>
              Selecione o campeão oficial
            </option>
            {CHAMPION_TEAMS.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>

          <button className="primary-button disabled:cursor-not-allowed disabled:opacity-70" disabled={isSavingChampion} type="submit">
            <Save aria-hidden size={17} />
            {isSavingChampion ? 'Salvando...' : 'Salvar campeão'}
          </button>
        </form>
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <article className="panel p-5">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-sofia-green text-white">
                <CalendarPlus aria-hidden size={21} />
              </span>
              <h2 className="text-lg font-black text-sofia-green">
                {editingMatchId ? 'Editar jogo' : 'Cadastrar jogo'}
              </h2>
            </div>

            {editingMatchId ? (
              <button className="secondary-button px-3" type="button" onClick={resetForm}>
                <X aria-hidden size={17} />
                Cancelar
              </button>
            ) : null}
          </div>

          <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-sofia-green">Time da casa</span>
              <input
                className="field"
                onChange={(event) => setFormField('homeTeam', event.target.value)}
                placeholder="Brasil"
                required
                value={form.homeTeam}
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-sofia-green">Time visitante</span>
              <input
                className="field"
                onChange={(event) => setFormField('awayTeam', event.target.value)}
                placeholder="Japão"
                required
                value={form.awayTeam}
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-sofia-green">Fase</span>
              <input
                className="field"
                onChange={(event) => setFormField('phase', event.target.value)}
                placeholder="Grupo A"
                required
                value={form.phase}
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-sofia-green">Data e horário</span>
              <input
                className="field"
                onChange={(event) => setFormField('startsAt', event.target.value)}
                required
                type="datetime-local"
                value={form.startsAt}
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-sofia-green">Status</span>
              <select
                className="field"
                onChange={(event) => setFormField('status', event.target.value as MatchStatus)}
                value={form.status}
              >
                <option value="upcoming">Palpites abertos</option>
                <option value="closed">Palpites encerrados</option>
                <option value="finished">Finalizado</option>
              </select>
            </label>
            <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-2">
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-sofia-green">Gols casa</span>
                <input
                  className="field text-center"
                  inputMode="numeric"
                  min={0}
                  onChange={(event) => setFormField('homeScore', event.target.value)}
                  placeholder="-"
                  type="number"
                  value={form.homeScore}
                />
              </label>
              <span className="pb-2 font-black text-sofia-green">x</span>
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-sofia-green">Gols visitante</span>
                <input
                  className="field text-center"
                  inputMode="numeric"
                  min={0}
                  onChange={(event) => setFormField('awayScore', event.target.value)}
                  placeholder="-"
                  type="number"
                  value={form.awayScore}
                />
              </label>
            </div>

            <button
              className="primary-button disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
              disabled={isSubmitting}
              type="submit"
            >
              <Save aria-hidden size={17} />
              {isSubmitting ? 'Salvando...' : 'Salvar jogo'}
            </button>
          </form>
        </article>

        <section className="panel overflow-hidden">
          <div className="border-b border-sofia-green/10 px-4 py-4">
            <h2 className="text-lg font-black text-sofia-green">Jogos cadastrados</h2>
            <p className="mt-1 text-sm text-slate-600">Atualização em tempo real pelo Firestore.</p>
          </div>

          {isLoadingMatches ? (
            <div className="p-5 text-sm font-semibold text-slate-600">Carregando jogos...</div>
          ) : null}

          {!isLoadingMatches && matches.length === 0 ? (
            <div className="p-5 text-sm font-semibold text-slate-600">Nenhum jogo cadastrado ainda.</div>
          ) : null}

          <div className="divide-y divide-sofia-green/10">
            {matches.map((match) => (
              <article key={match.id} className="grid gap-4 p-4 xl:grid-cols-[1fr_auto] xl:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs font-black uppercase text-sofia-gold">{match.phase}</p>
                    <StatusBadge tone={getStatusTone(match.status)}>{getStatusLabel(match.status)}</StatusBadge>
                  </div>
                  <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center">
                    <strong className="text-sofia-green">{match.homeTeam}</strong>
                    <span className="rounded-md bg-sofia-cream px-3 py-2 text-sm font-black text-sofia-green">
                      {match.homeScore === null || match.awayScore === null
                        ? 'x'
                        : `${match.homeScore} x ${match.awayScore}`}
                    </span>
                    <strong className="text-sofia-green">{match.awayTeam}</strong>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-600">{formatDateTime(match.startsAt)}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end">
                  {isFinishedWithScore(match) ? (
                    <button
                      className="secondary-button col-span-2 px-3 sm:col-span-1"
                      disabled={recalculatingMatchId === match.id}
                      type="button"
                      onClick={() => handleRecalculate(match)}
                    >
                      <RotateCcw aria-hidden size={17} />
                      {recalculatingMatchId === match.id ? 'Recalculando...' : 'Recalcular pontuação'}
                    </button>
                  ) : null}
                  <button className="secondary-button px-3" type="button" onClick={() => handleEdit(match)}>
                    <Pencil aria-hidden size={17} />
                    Editar
                  </button>
                  <button className="secondary-button px-3 text-red-700 hover:border-red-200 hover:bg-red-50" type="button" onClick={() => handleDelete(match)}>
                    <Trash2 aria-hidden size={17} />
                    Excluir
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </div>
  );

  function setFormField<T extends keyof MatchForm>(field: T, value: MatchForm[T]) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  }
}

function mapMatchDocument(matchDocument: QueryDocumentSnapshot): Match {
  const data = matchDocument.data();
  const startsAt = data.startsAt instanceof Timestamp ? data.startsAt.toDate() : new Date(data.startsAt);

  return {
    id: matchDocument.id,
    code: typeof data.code === 'string' ? data.code : undefined,
    homeTeam: String(data.homeTeam ?? ''),
    awayTeam: String(data.awayTeam ?? ''),
    startsAt,
    phase: String(data.phase ?? ''),
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

function parseMatchForm(form: MatchForm) {
  const startsAt = new Date(form.startsAt);
  const homeScore = parseOptionalScore(form.homeScore);
  const awayScore = parseOptionalScore(form.awayScore);

  if (
    !form.homeTeam.trim() ||
    !form.awayTeam.trim() ||
    !form.phase.trim() ||
    Number.isNaN(startsAt.getTime()) ||
    homeScore === false ||
    awayScore === false
  ) {
    return null;
  }

  return {
    homeTeam: form.homeTeam.trim(),
    awayTeam: form.awayTeam.trim(),
    startsAt,
    phase: form.phase.trim(),
    status: form.status,
    homeScore,
    awayScore,
  };
}

function parseOptionalScore(value: string) {
  if (value.trim() === '') {
    return null;
  }

  const score = Number(value);

  return Number.isInteger(score) && score >= 0 ? score : false;
}

function parseNullableScore(score: unknown) {
  return typeof score === 'number' ? score : null;
}

function parseMatchStatus(status: unknown): MatchStatus {
  if (status === 'closed' || status === 'finished') {
    return status;
  }

  return 'upcoming';
}

function isFinishedWithScore(match: Pick<Match, 'status' | 'homeScore' | 'awayScore'>) {
  return match.status === 'finished' && match.homeScore !== null && match.awayScore !== null;
}

function calculateUserTotals(
  predictions: Prediction[],
  matchMap: Map<string, Match>,
  championPrediction: ChampionPrediction | null,
  officialChampion: string,
) {
  const totals = predictions.reduce(
    (currentTotals, prediction) => {
      const match = matchMap.get(prediction.matchId);

      if (!match || !isFinishedWithScore(match)) {
        return currentTotals;
      }

      const points = calculatePredictionPoints(prediction, match);

      return {
        totalPoints: currentTotals.totalPoints + points,
        exactScores: currentTotals.exactScores + (isExactScore(prediction, match) ? 1 : 0),
        winnerHits: currentTotals.winnerHits + (isWinnerHit(prediction, match) ? 1 : 0),
      };
    },
    { totalPoints: 0, exactScores: 0, winnerHits: 0 },
  );

  if (officialChampion && championPrediction?.championTeam === officialChampion) {
    totals.totalPoints += CHAMPION_PREDICTION_POINTS;
  }

  return totals;
}

function toDatetimeLocalValue(date: Date) {
  const offset = date.getTimezoneOffset();
  const localDate = new Date(date.getTime() - offset * 60_000);

  return localDate.toISOString().slice(0, 16);
}

function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date);
}

function getStatusLabel(status: MatchStatus) {
  if (status === 'finished') {
    return 'Finalizado';
  }

  if (status === 'closed') {
    return 'Palpites encerrados';
  }

  return 'Palpites abertos';
}

function getStatusTone(status: MatchStatus) {
  if (status === 'upcoming') {
    return 'green' as const;
  }

  if (status === 'finished') {
    return 'gold' as const;
  }

  return 'neutral' as const;
}

function getAdminErrorMessage(code: string) {
  if (code === 'permission-denied') {
    return 'Você não tem permissão para executar esta ação.';
  }

  return 'Não foi possível concluir esta ação.';
}
