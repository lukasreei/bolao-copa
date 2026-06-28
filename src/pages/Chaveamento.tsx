import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  type QueryDocumentSnapshot,
} from 'firebase/firestore';
import { ArrowRight, CalendarDays, GitBranch, Pencil, Plus, Save, X } from 'lucide-react';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { StatusBadge } from '../components/StatusBadge';
import { worldCup2026Matches } from '../data/worldCup2026Matches';
import { useAuth } from '../hooks/useAuth';
import { db } from '../lib/firebase';

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
};

/* eslint-disable no-unused-vars */
type AdvanceTeamHandler = (match: Match, side: 'home' | 'away') => void;
type EditMatchHandler = (match: Match) => void;
type FormChangeHandler = (form: MatchForm) => void;
type SaveMatchHandler = (event: FormEvent<HTMLFormElement>, match: Match) => void;
/* eslint-enable no-unused-vars */

type BracketRound = {
  title: string;
  phases: string[];
  className: string;
};

const bracketRounds: BracketRound[] = [
  { title: '16 avos', phases: ['16 avos de final'], className: 'gap-3' },
  { title: 'Oitavas', phases: ['Oitavas de final'], className: 'gap-[5.25rem] pt-[4.25rem]' },
  { title: 'Quartas', phases: ['Quartas de final'], className: 'gap-[15rem] pt-[11.5rem]' },
  { title: 'Semifinais', phases: ['Semifinal'], className: 'gap-[33rem] pt-[25.5rem]' },
  { title: '3o lugar', phases: ['Disputa de 3o lugar', 'Disputa de 3\u00ba lugar'], className: 'gap-6 pt-[33rem]' },
  { title: 'Final', phases: ['Final'], className: 'gap-6 pt-[41rem]' },
];

export function Chaveamento() {
  const { isAdmin } = useAuth();
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoadingMatches, setIsLoadingMatches] = useState(true);
  const [editingMatchId, setEditingMatchId] = useState<string | null>(null);
  const [matchForm, setMatchForm] = useState<MatchForm>({ homeTeam: '', awayTeam: '' });
  const [savingMatchId, setSavingMatchId] = useState<string | null>(null);
  const [isCreatingBracket, setIsCreatingBracket] = useState(false);
  const [error, setError] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    const matchesQuery = query(collection(db, 'matches'), orderBy('startsAt', 'asc'));

    const unsubscribe = onSnapshot(
      matchesQuery,
      (snapshot) => {
        setMatches(snapshot.docs.map(mapMatchDocument));
        setIsLoadingMatches(false);
        setError('');
      },
      () => {
        setError('Nao foi possivel carregar o chaveamento.');
        setIsLoadingMatches(false);
      },
    );

    return unsubscribe;
  }, []);

  const rounds = useMemo(
    () =>
      bracketRounds.map((round) => ({
        ...round,
        matches: matches
          .filter((match) => round.phases.includes(normalizePhase(match.phase)))
          .sort((firstMatch, secondMatch) => getMatchNumber(firstMatch) - getMatchNumber(secondMatch)),
      })),
    [matches],
  );

  const hasBracketMatches = rounds.some((round) => round.matches.length > 0);

  async function handleCreateBracket() {
    setIsCreatingBracket(true);
    setFeedback(null);

    try {
      const knockoutMatches = worldCup2026Matches.filter((match) => {
        const matchNumber = Number(match.code.match(/\d+$/)?.[0] ?? 0);
        return matchNumber >= 73;
      });

      const matchesToSave = hasBracketMatches
        ? knockoutMatches.filter((match) => Number(match.code.match(/\d+$/)?.[0] ?? 0) <= 88)
        : knockoutMatches;

      await Promise.all(
        matchesToSave.map((match) =>
          setDoc(
            doc(db, 'matches', match.id),
            hasBracketMatches
              ? {
                  code: match.code,
                  homeTeam: match.homeTeam,
                  awayTeam: match.awayTeam,
                  startsAt: new Date(match.startsAt),
                  phase: match.phase,
                  updatedAt: serverTimestamp(),
                }
              : {
                  ...match,
                  startsAt: new Date(match.startsAt),
                  createdAt: serverTimestamp(),
                  updatedAt: serverTimestamp(),
                },
            { merge: true },
          ),
        ),
      );

      setFeedback({
        type: 'success',
        message: hasBracketMatches
          ? 'Confrontos reais dos 16 avos atualizados.'
          : 'Chaveamento criado com os confrontos reais.',
      });
    } catch {
      setFeedback({ type: 'error', message: 'Nao foi possivel criar o chaveamento.' });
    } finally {
      setIsCreatingBracket(false);
    }
  }

  function handleEditMatch(match: Match) {
    setEditingMatchId(match.id);
    setMatchForm({
      homeTeam: match.homeTeam,
      awayTeam: match.awayTeam,
    });
    setFeedback(null);
  }

  function handleCancelEdit() {
    setEditingMatchId(null);
    setMatchForm({ homeTeam: '', awayTeam: '' });
  }

  async function handleSaveMatch(event: FormEvent<HTMLFormElement>, match: Match) {
    event.preventDefault();

    if (!matchForm.homeTeam.trim() || !matchForm.awayTeam.trim()) {
      setFeedback({ type: 'error', message: 'Informe os dois times do confronto.' });
      return;
    }

    setSavingMatchId(match.id);
    setFeedback(null);

    try {
      await setDoc(
        doc(db, 'matches', match.id),
        {
          homeTeam: matchForm.homeTeam.trim(),
          awayTeam: matchForm.awayTeam.trim(),
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      );

      handleCancelEdit();
      setFeedback({ type: 'success', message: 'Confronto atualizado no chaveamento.' });
    } catch {
      setFeedback({ type: 'error', message: 'Nao foi possivel salvar o confronto.' });
    } finally {
      setSavingMatchId(null);
    }
  }

  async function handleAdvanceTeam(match: Match, side: 'home' | 'away') {
    const target = getAdvanceTarget(match, matches);

    if (!target) {
      setFeedback({ type: 'error', message: 'Nao existe proximo jogo para este confronto.' });
      return;
    }

    const selectedTeam = side === 'home' ? match.homeTeam : match.awayTeam;
    const opponentTeam = side === 'home' ? match.awayTeam : match.homeTeam;

    setSavingMatchId(match.id);
    setFeedback(null);

    try {
      await setDoc(
        doc(db, 'matches', target.nextMatch.id),
        {
          [target.nextSlot === 'home' ? 'homeTeam' : 'awayTeam']: selectedTeam,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      );

      if (target.thirdPlaceMatch && target.thirdPlaceSlot) {
        await setDoc(
          doc(db, 'matches', target.thirdPlaceMatch.id),
          {
            [target.thirdPlaceSlot === 'home' ? 'homeTeam' : 'awayTeam']: opponentTeam,
            updatedAt: serverTimestamp(),
          },
          { merge: true },
        );
      }

      setFeedback({ type: 'success', message: `${selectedTeam} avancou na chave.` });
    } catch {
      setFeedback({ type: 'error', message: 'Nao foi possivel avancar o time.' });
    } finally {
      setSavingMatchId(null);
    }
  }

  return (
    <div className="page-shell">
      <PageHeader
        title="Chaveamento"
        description="Monte e acompanhe o mata-mata da Copa a partir dos 16 avos de final."
      />

      <section className="mb-4 flex flex-col gap-3 rounded-md border border-sofia-green/15 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-black text-sofia-green">Montagem do chaveamento</h2>
          <p className="text-sm font-semibold text-slate-600">
            {isAdmin
              ? 'Crie a estrutura e use o lapis nos jogos para definir os confrontos.'
              : 'Somente um administrador pode montar e editar os confrontos.'}
          </p>
        </div>
        {isAdmin ? (
          <button
            className="primary-button shrink-0"
            disabled={isCreatingBracket}
            type="button"
            onClick={handleCreateBracket}
          >
            <Plus aria-hidden size={18} />
            {isCreatingBracket
              ? 'Salvando...'
              : hasBracketMatches
                ? 'Atualizar jogos reais'
                : 'Criar com jogos reais'}
          </button>
        ) : null}
      </section>

      {error ? (
        <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </div>
      ) : null}

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

      {isLoadingMatches ? (
        <div className="panel p-5 text-sm font-semibold text-slate-600">Carregando chaveamento...</div>
      ) : null}

      {!isLoadingMatches && !hasBracketMatches ? (
        <div className="panel flex flex-col items-start gap-3 p-5 text-sm font-semibold text-slate-600">
          <p>Nenhum jogo de mata-mata cadastrado ainda.</p>
          {isAdmin ? (
            <button
              className="primary-button"
              disabled={isCreatingBracket}
              type="button"
              onClick={handleCreateBracket}
            >
              <Plus aria-hidden size={18} />
              {isCreatingBracket ? 'Criando...' : 'Montar chaveamento agora'}
            </button>
          ) : null}
        </div>
      ) : null}

      {!isLoadingMatches && hasBracketMatches ? (
        <section className="panel overflow-hidden">
          <div className="flex items-center gap-3 border-b border-sofia-green/10 px-4 py-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-sofia-green text-white">
              <GitBranch aria-hidden size={21} />
            </span>
            <div>
              <h2 className="text-lg font-black text-sofia-green">Mata-mata</h2>
              <p className="text-sm font-semibold text-slate-600">
                {isAdmin ? 'Edite os confrontos e avance os times pela chave.' : 'Jogos 73 a 104'}
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="bracket-board grid min-w-[92rem] grid-cols-[repeat(6,minmax(13rem,1fr))] gap-4 p-4">
              {rounds.map((round) => (
                <div key={round.title} className={`bracket-round grid content-start ${round.className}`}>
                  <div className="sticky top-0 z-10 rounded-md bg-sofia-cream px-3 py-2">
                    <h3 className="text-center text-sm font-black uppercase text-sofia-green">{round.title}</h3>
                  </div>

                  {round.matches.length === 0 ? (
                    <div className="rounded-md border border-dashed border-sofia-green/20 p-3 text-center text-xs font-semibold text-slate-500">
                      A definir
                    </div>
                  ) : (
                    round.matches.map((match) => (
                      <BracketMatchCard
                        key={match.id}
                        match={match}
                        canManage={isAdmin}
                        form={matchForm}
                        isEditing={editingMatchId === match.id}
                        isSaving={savingMatchId === match.id}
                        onAdvanceTeam={handleAdvanceTeam}
                        onCancelEdit={handleCancelEdit}
                        onEdit={handleEditMatch}
                        onFormChange={setMatchForm}
                        onSave={handleSaveMatch}
                      />
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

function BracketMatchCard({
  match,
  canManage,
  form,
  isEditing,
  isSaving,
  onAdvanceTeam,
  onCancelEdit,
  onEdit,
  onFormChange,
  onSave,
}: {
  match: Match;
  canManage: boolean;
  form: MatchForm;
  isEditing: boolean;
  isSaving: boolean;
  onAdvanceTeam: AdvanceTeamHandler;
  onCancelEdit: () => void;
  onEdit: EditMatchHandler;
  onFormChange: FormChangeHandler;
  onSave: SaveMatchHandler;
}) {
  if (isEditing) {
    return (
      <article className="bracket-match rounded-md border border-sofia-gold/60 bg-white p-3 shadow-sm">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="text-xs font-black uppercase text-sofia-gold">Jogo {getMatchNumber(match)}</span>
          <button className="secondary-button min-h-8 px-2" type="button" onClick={onCancelEdit}>
            <X aria-hidden size={15} />
          </button>
        </div>

        <form className="grid gap-2" onSubmit={(event) => onSave(event, match)}>
          <input
            className="field"
            placeholder="Time 1"
            value={form.homeTeam}
            onChange={(event) => onFormChange({ ...form, homeTeam: event.target.value })}
          />
          <input
            className="field"
            placeholder="Time 2"
            value={form.awayTeam}
            onChange={(event) => onFormChange({ ...form, awayTeam: event.target.value })}
          />
          <button className="primary-button min-h-9 px-3" disabled={isSaving} type="submit">
            <Save aria-hidden size={16} />
            {isSaving ? 'Salvando...' : 'Salvar'}
          </button>
        </form>
      </article>
    );
  }

  return (
    <article className="bracket-match rounded-md border border-sofia-green/10 bg-white p-3 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="text-xs font-black uppercase text-sofia-gold">Jogo {getMatchNumber(match)}</span>
        <StatusBadge tone={getStatusTone(match.status)}>{getStatusLabel(match.status)}</StatusBadge>
      </div>

      <div className="grid gap-1.5">
        <TeamRow
          canManage={canManage}
          disabled={isSaving || !hasAdvanceTarget(match)}
          isWinner={isWinner(match, 'home')}
          name={match.homeTeam}
          score={match.homeScore}
          onAdvance={() => onAdvanceTeam(match, 'home')}
        />
        <TeamRow
          canManage={canManage}
          disabled={isSaving || !hasAdvanceTarget(match)}
          isWinner={isWinner(match, 'away')}
          name={match.awayTeam}
          score={match.awayScore}
          onAdvance={() => onAdvanceTeam(match, 'away')}
        />
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <p className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
          <CalendarDays aria-hidden size={14} />
          {formatDateTime(match.startsAt)}
        </p>

        {canManage ? (
          <button className="secondary-button min-h-8 px-2" disabled={isSaving} type="button" onClick={() => onEdit(match)}>
            <Pencil aria-hidden size={15} />
          </button>
        ) : null}
      </div>
    </article>
  );
}

function TeamRow({
  canManage,
  disabled,
  name,
  score,
  isWinner,
  onAdvance,
}: {
  canManage: boolean;
  disabled: boolean;
  name: string;
  score: number | null;
  isWinner: boolean;
  onAdvance: () => void;
}) {
  return (
    <div
      className={[
        'grid min-h-10 items-center gap-2 rounded-md px-2 py-1.5',
        canManage ? 'grid-cols-[1fr_2rem_2rem]' : 'grid-cols-[1fr_2rem]',
        isWinner ? 'bg-sofia-green text-white' : 'bg-sofia-cream text-sofia-green',
      ].join(' ')}
    >
      <span className="truncate text-sm font-black" title={name}>
        {name}
      </span>
      <span className="text-center text-sm font-black">{score ?? '-'}</span>
      {canManage ? (
        <button
          className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/80 text-sofia-green transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          disabled={disabled}
          title={`Avancar ${name}`}
          type="button"
          onClick={onAdvance}
        >
          <ArrowRight aria-hidden size={15} />
        </button>
      ) : null}
    </div>
  );
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

function normalizePhase(phase: string) {
  return phase.replace('Âº', 'o').replace('º', 'o');
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

function getMatchNumber(match: Pick<Match, 'code' | 'id'>) {
  const matchCode = match.code ?? match.id;
  const matchNumber = Number(matchCode.match(/\d+$/)?.[0] ?? 0);

  return matchNumber;
}

function isWinner(match: Match, team: 'home' | 'away') {
  if (match.status !== 'finished' || match.homeScore === null || match.awayScore === null) {
    return false;
  }

  return team === 'home' ? match.homeScore > match.awayScore : match.awayScore > match.homeScore;
}

function hasAdvanceTarget(match: Match) {
  const matchNumber = getMatchNumber(match);

  return matchNumber >= 73 && matchNumber <= 102;
}

function getAdvanceTarget(match: Match, matches: Match[]) {
  const matchNumber = getMatchNumber(match);

  const advanceMap: Record<number, { nextMatchNumber: number; nextSlot: 'home' | 'away' }> = {
    73: { nextMatchNumber: 90, nextSlot: 'home' },
    74: { nextMatchNumber: 89, nextSlot: 'home' },
    75: { nextMatchNumber: 90, nextSlot: 'away' },
    76: { nextMatchNumber: 91, nextSlot: 'home' },
    77: { nextMatchNumber: 89, nextSlot: 'away' },
    78: { nextMatchNumber: 91, nextSlot: 'away' },
    79: { nextMatchNumber: 92, nextSlot: 'home' },
    80: { nextMatchNumber: 92, nextSlot: 'away' },
    81: { nextMatchNumber: 94, nextSlot: 'home' },
    82: { nextMatchNumber: 94, nextSlot: 'away' },
    83: { nextMatchNumber: 93, nextSlot: 'home' },
    84: { nextMatchNumber: 93, nextSlot: 'away' },
    85: { nextMatchNumber: 96, nextSlot: 'home' },
    86: { nextMatchNumber: 95, nextSlot: 'home' },
    87: { nextMatchNumber: 96, nextSlot: 'away' },
    88: { nextMatchNumber: 95, nextSlot: 'away' },
    89: { nextMatchNumber: 97, nextSlot: 'home' },
    90: { nextMatchNumber: 97, nextSlot: 'away' },
    91: { nextMatchNumber: 99, nextSlot: 'home' },
    92: { nextMatchNumber: 99, nextSlot: 'away' },
    93: { nextMatchNumber: 98, nextSlot: 'home' },
    94: { nextMatchNumber: 98, nextSlot: 'away' },
    95: { nextMatchNumber: 100, nextSlot: 'home' },
    96: { nextMatchNumber: 100, nextSlot: 'away' },
    97: { nextMatchNumber: 101, nextSlot: 'home' },
    98: { nextMatchNumber: 101, nextSlot: 'away' },
    99: { nextMatchNumber: 102, nextSlot: 'home' },
    100: { nextMatchNumber: 102, nextSlot: 'away' },
  };
  const target = advanceMap[matchNumber];

  if (target) {
    const nextMatch = findMatchByNumber(matches, target.nextMatchNumber);

    if (!nextMatch) {
      return null;
    }

    return {
      nextMatch,
      nextSlot: target.nextSlot,
      thirdPlaceMatch: null,
      thirdPlaceSlot: null,
    } as const;
  }

  if (matchNumber === 101 || matchNumber === 102) {
    const nextMatch = findMatchByNumber(matches, 104);

    if (!nextMatch) {
      return null;
    }

    return {
      nextMatch,
      nextSlot: matchNumber === 101 ? 'home' : 'away',
      thirdPlaceMatch: findMatchByNumber(matches, 103),
      thirdPlaceSlot: matchNumber === 101 ? 'home' : 'away',
    } as const;
  }

  return null;
}

function findMatchByNumber(matches: Match[], matchNumber: number) {
  return matches.find((match) => getMatchNumber(match) === matchNumber);
}

function getStatusLabel(status: MatchStatus) {
  if (status === 'finished') {
    return 'Finalizado';
  }

  if (status === 'closed') {
    return 'Encerrado';
  }

  return 'Aberto';
}

function getStatusTone(status: MatchStatus) {
  if (status === 'finished') {
    return 'gold' as const;
  }

  if (status === 'closed') {
    return 'neutral' as const;
  }

  return 'green' as const;
}

function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date);
}
