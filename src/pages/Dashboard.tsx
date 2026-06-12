import {
  collection,
  onSnapshot,
  query,
  where,
  type QueryDocumentSnapshot,
} from 'firebase/firestore';
import { CalendarDays, Medal, Target, Trophy } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { StatusBadge } from '../components/StatusBadge';
import { useAuth } from '../hooks/useAuth';
import { db } from '../lib/firebase';

type MatchStatus = 'upcoming' | 'closed' | 'finished';

type Match = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  startsAt: Date | null;
  phase: string;
  status: MatchStatus;
};

type Prediction = {
  id: string;
  matchId: string;
};

type RankingUser = {
  uid: string;
  name: string;
  sector: string;
  totalPoints: number;
  exactScores: number;
  winnerHits: number;
};

export function Dashboard() {
  const { user, profile, isLoadingAuth } = useAuth();
  const [matches, setMatches] = useState<Match[]>([]);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [users, setUsers] = useState<RankingUser[]>([]);
  const [isLoadingMatches, setIsLoadingMatches] = useState(true);
  const [isLoadingPredictions, setIsLoadingPredictions] = useState(true);
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'matches'),
      (snapshot) => {
        setMatches(snapshot.docs.map(mapMatchDocument));
        setIsLoadingMatches(false);
      },
      () => {
        setError('Não foi possível carregar os jogos.');
        setIsLoadingMatches(false);
      },
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'users'),
      (snapshot) => {
        setUsers(snapshot.docs.map(mapUserDocument));
        setIsLoadingUsers(false);
      },
      () => {
        setError('Não foi possível carregar o ranking.');
        setIsLoadingUsers(false);
      },
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) {
      setPredictions([]);
      setIsLoadingPredictions(false);
      return;
    }

    setIsLoadingPredictions(true);

    const predictionsQuery = query(
      collection(db, 'predictions'),
      where('userId', '==', user.uid),
    );

    const unsubscribe = onSnapshot(
      predictionsQuery,
      (snapshot) => {
        setPredictions(snapshot.docs.map(mapPredictionDocument));
        setIsLoadingPredictions(false);
      },
      () => {
        setError('Não foi possível carregar seus palpites.');
        setIsLoadingPredictions(false);
      },
    );

    return unsubscribe;
  }, [user]);

  const ranking = useMemo(() => sortRankingUsers(users), [users]);
  const currentPosition = user ? ranking.findIndex((rankingUser) => rankingUser.uid === user.uid) + 1 : 0;
  const predictedMatchIds = useMemo(
    () => new Set(predictions.map((prediction) => prediction.matchId)),
    [predictions],
  );
  const upcomingMatches = useMemo(
    () =>
      matches
        .filter((match) => match.status === 'upcoming')
        .sort((firstMatch, secondMatch) => compareMatchDates(firstMatch.startsAt, secondMatch.startsAt))
        .slice(0, 5),
    [matches],
  );
  const nextAvailableMatch = upcomingMatches.find((match) => !predictedMatchIds.has(match.id));

  const stats = [
    { label: 'Meus pontos', value: profile?.totalPoints ?? 0, icon: Trophy },
    { label: 'Minha posição', value: currentPosition ? `${currentPosition}º` : '-', icon: Medal },
    { label: 'Palpites feitos', value: predictions.length, icon: Target },
    { label: 'Próximos jogos', value: matches.filter((match) => match.status === 'upcoming').length, icon: CalendarDays },
  ];

  const isLoading = isLoadingAuth || isLoadingMatches || isLoadingPredictions || isLoadingUsers;

  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Copa 2026"
        title="Dashboard"
        description="Resumo dos jogos, desempenho e próximos palpites do Bolão Copa Mercado Sofia."
      />

      {error ? (
        <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </div>
      ) : null}

      {!isLoadingAuth && !user ? (
        <div className="panel mb-4 p-5">
          <p className="text-sm font-semibold text-slate-700">
            Entre com seu usuário para acompanhar seus pontos e palpites.
          </p>
          <Link className="primary-button mt-4" to="/login">
            Entrar
          </Link>
        </div>
      ) : null}

      {isLoading ? (
        <div className="panel mb-4 p-5 text-sm font-semibold text-slate-600">Carregando dashboard...</div>
      ) : null}

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article key={stat.label} className="panel p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-3xl font-black text-sofia-green">{stat.value}</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-sofia-gold/20 text-sofia-green">
                  <Icon aria-hidden size={22} />
                </span>
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="panel p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-black text-sofia-green">Próximos Jogos</h2>
            <StatusBadge tone={upcomingMatches.length > 0 ? 'green' : 'neutral'}>
              {upcomingMatches.length > 0 ? 'Palpites abertos' : 'Sem jogo disponível'}
            </StatusBadge>
          </div>

          {isLoadingMatches ? (
            <p className="mt-4 text-sm font-semibold text-slate-600">Carregando jogos...</p>
          ) : null}

          {!isLoadingMatches && matches.length === 0 ? (
            <p className="mt-4 text-sm font-semibold text-slate-600">Nenhum jogo cadastrado.</p>
          ) : null}

          {!isLoadingMatches && matches.length > 0 && upcomingMatches.length === 0 ? (
            <p className="mt-4 text-sm font-semibold text-slate-600">Nenhum próximo jogo disponível.</p>
          ) : null}

          {upcomingMatches.length > 0 ? (
            <div className="mt-5 space-y-3">
              {upcomingMatches.map((match) => (
                <div key={match.id} className="rounded-lg bg-sofia-cream p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-bold text-sofia-gold">{match.phase}</p>
                    {predictedMatchIds.has(match.id) ? (
                      <StatusBadge tone="neutral">Palpite registrado</StatusBadge>
                    ) : (
                      <StatusBadge tone="green">Palpite aberto</StatusBadge>
                    )}
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3 text-center">
                    <strong className="flex-1 text-lg text-sofia-green">{match.homeTeam}</strong>
                    <span className="rounded-md bg-white px-3 py-2 text-sm font-black text-sofia-green shadow-sm">x</span>
                    <strong className="flex-1 text-lg text-sofia-green">{match.awayTeam}</strong>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">{formatDateTime(match.startsAt)}</p>
                </div>
              ))}
              {nextAvailableMatch ? (
                <Link className="primary-button" to="/jogos">
                  Registrar palpite
                </Link>
              ) : null}
            </div>
          ) : (
            null
          )}
        </article>

        <article className="panel p-5">
          <h2 className="text-lg font-black text-sofia-green">Top 3 ranking</h2>
          <div className="mt-4 space-y-3">
            {ranking.slice(0, 3).map((rankingUser, index) => (
              <div key={rankingUser.uid} className="flex items-center gap-3 rounded-lg border border-sofia-green/10 p-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-sofia-green text-sm font-black text-white">
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold text-sofia-green">{rankingUser.name || 'Sem nome'}</p>
                  <p className="text-xs font-semibold text-slate-500">{rankingUser.sector || '-'}</p>
                </div>
                <strong className="text-sofia-gold">{rankingUser.totalPoints} pts</strong>
              </div>
            ))}
            {!isLoading && ranking.length === 0 ? (
              <p className="text-sm font-semibold text-slate-600">Nenhum usuário no ranking ainda.</p>
            ) : null}
          </div>
        </article>
      </section>
    </div>
  );
}

function mapMatchDocument(matchDocument: QueryDocumentSnapshot): Match {
  const data = matchDocument.data();

  return {
    id: matchDocument.id,
    homeTeam: String(data.homeTeam ?? ''),
    awayTeam: String(data.awayTeam ?? ''),
    startsAt: getMatchDate(data.startsAt),
    phase: String(data.phase ?? ''),
    status: parseMatchStatus(data.status),
  };
}

function mapPredictionDocument(predictionDocument: QueryDocumentSnapshot): Prediction {
  const data = predictionDocument.data();

  return {
    id: predictionDocument.id,
    matchId: String(data.matchId ?? ''),
  };
}

function mapUserDocument(userDocument: QueryDocumentSnapshot): RankingUser {
  const data = userDocument.data();

  return {
    uid: String(data.uid ?? userDocument.id),
    name: String(data.name ?? ''),
    sector: String(data.sector ?? ''),
    totalPoints: Number(data.totalPoints ?? 0),
    exactScores: Number(data.exactScores ?? 0),
    winnerHits: Number(data.winnerHits ?? 0),
  };
}

function parseMatchStatus(status: unknown): MatchStatus {
  if (status === 'closed' || status === 'finished') {
    return status;
  }

  return 'upcoming';
}

function sortRankingUsers(users: RankingUser[]) {
  return [...users].sort((firstUser, secondUser) => {
    if (secondUser.totalPoints !== firstUser.totalPoints) {
      return secondUser.totalPoints - firstUser.totalPoints;
    }

    if (secondUser.exactScores !== firstUser.exactScores) {
      return secondUser.exactScores - firstUser.exactScores;
    }

    if (secondUser.winnerHits !== firstUser.winnerHits) {
      return secondUser.winnerHits - firstUser.winnerHits;
    }

    return firstUser.name.localeCompare(secondUser.name, 'pt-BR');
  });
}

function getMatchDate(value: unknown) {
  if (!value) {
    return null;
  }

  if (typeof value === 'string') {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value;
  }

  if (typeof value === 'object' && 'toDate' in value && typeof value.toDate === 'function') {
    const date = value.toDate();
    return date instanceof Date && !Number.isNaN(date.getTime()) ? date : null;
  }

  return null;
}

function compareMatchDates(firstDate: Date | null, secondDate: Date | null) {
  if (firstDate && secondDate) {
    return firstDate.getTime() - secondDate.getTime();
  }

  if (firstDate) {
    return -1;
  }

  if (secondDate) {
    return 1;
  }

  return 0;
}

function formatDateTime(date: Date | null) {
  if (!date) {
    return 'Data a definir';
  }

  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date);
}
