import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  where,
  type QueryDocumentSnapshot,
} from 'firebase/firestore';
import { CalendarDays } from 'lucide-react';
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

export function MeusPalpites() {
  const { user, isLoadingAuth } = useAuth();
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [matches, setMatches] = useState<Record<string, Match>>({});
  const [isLoadingPredictions, setIsLoadingPredictions] = useState(true);
  const [isLoadingMatches, setIsLoadingMatches] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const matchesQuery = query(collection(db, 'matches'), orderBy('startsAt', 'asc'));
    const unsubscribe = onSnapshot(
      matchesQuery,
      (snapshot) => {
        setMatches(
          Object.fromEntries(snapshot.docs.map((matchDocument) => {
            const match = mapMatchDocument(matchDocument);
            return [match.id, match];
          })),
        );
        setIsLoadingMatches(false);
      },
      () => {
        setError('Não foi possível carregar os jogos dos seus palpites.');
        setIsLoadingMatches(false);
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
        setError('');
      },
      () => {
        setError('Não foi possível carregar seus palpites em tempo real.');
        setIsLoadingPredictions(false);
      },
    );

    return unsubscribe;
  }, [user]);

  const predictionRows = useMemo(
    () =>
      predictions
        .map((prediction) => ({
          prediction,
          match: matches[prediction.matchId],
        }))
        .sort((firstRow, secondRow) => {
          const firstTime = firstRow.match?.startsAt.getTime() ?? 0;
          const secondTime = secondRow.match?.startsAt.getTime() ?? 0;

          return firstTime - secondTime;
        }),
    [matches, predictions],
  );

  const futureRows = predictionRows.filter(({ match }) => match?.status !== 'finished');
  const finishedRows = predictionRows.filter(({ match }) => match?.status === 'finished');
  const isLoading = isLoadingAuth || isLoadingPredictions || isLoadingMatches;

  return (
    <div className="page-shell">
      <PageHeader
        title="Meus Palpites"
        description="Acompanhe seus palpites registrados, pontos conquistados e jogos ainda aguardando resultado."
      />

      {error ? (
        <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </div>
      ) : null}

      {!isLoadingAuth && !user ? (
        <div className="panel p-5">
          <p className="text-sm font-semibold text-slate-700">
            Entre com seu usuário para ver seus palpites.
          </p>
          <Link className="primary-button mt-4" to="/login">
            Entrar
          </Link>
        </div>
      ) : null}

      {isLoading ? (
        <div className="panel p-5 text-sm font-semibold text-slate-600">Carregando palpites...</div>
      ) : null}

      {!isLoading && user && predictionRows.length === 0 ? (
        <div className="panel p-5 text-sm font-semibold text-slate-600">
          Você ainda não registrou nenhum palpite.
        </div>
      ) : null}

      {!isLoading && user && predictionRows.length > 0 ? (
        <div className="grid gap-5">
          <PredictionSection title="Jogos futuros" rows={futureRows} emptyMessage="Nenhum palpite em jogo futuro." />
          <PredictionSection title="Jogos finalizados" rows={finishedRows} emptyMessage="Nenhum palpite em jogo finalizado." />
        </div>
      ) : null}
    </div>
  );
}

function PredictionSection({
  title,
  rows,
  emptyMessage,
}: {
  title: string;
  rows: Array<{ prediction: Prediction; match?: Match }>;
  emptyMessage: string;
}) {
  return (
    <section className="panel overflow-hidden">
      <div className="border-b border-sofia-green/10 px-4 py-4">
        <h2 className="text-lg font-black text-sofia-green">{title}</h2>
      </div>

      {rows.length === 0 ? (
        <div className="p-4 text-sm font-semibold text-slate-600">{emptyMessage}</div>
      ) : (
        <div className="divide-y divide-sofia-green/10">
          {rows.map(({ prediction, match }) => (
            <article key={prediction.id} className="grid gap-4 p-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xs font-black uppercase text-sofia-gold">
                    {match?.phase ?? 'Jogo não encontrado'}
                  </p>
                  <StatusBadge tone={getStatusTone(match?.status)}>
                    {getStatusLabel(match?.status)}
                  </StatusBadge>
                </div>
                <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center">
                  <strong className="text-sofia-green">{match?.homeTeam ?? '-'}</strong>
                  <span className="rounded-md bg-sofia-cream px-3 py-2 text-sm font-black text-sofia-green">x</span>
                  <strong className="text-sofia-green">{match?.awayTeam ?? '-'}</strong>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-slate-600">
                  <CalendarDays aria-hidden size={16} />
                  {match ? formatDateTime(match.startsAt) : 'Data indisponível'}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[24rem]">
                <ScoreBox label="Palpite" value={`${prediction.homeScore} x ${prediction.awayScore}`} />
                <ScoreBox label="Resultado" value={formatResult(match)} />
                <ScoreBox label="Pontos" value={`${prediction.points}`} highlight />
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function ScoreBox({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="rounded-lg bg-sofia-cream p-3 text-center">
      <p className="text-xs font-bold uppercase text-slate-500">{label}</p>
      <p className={`mt-1 text-lg font-black ${highlight ? 'text-sofia-gold' : 'text-sofia-green'}`}>
        {value}
      </p>
    </div>
  );
}

function mapMatchDocument(matchDocument: QueryDocumentSnapshot): Match {
  const data = matchDocument.data();
  const startsAt = data.startsAt instanceof Timestamp ? data.startsAt.toDate() : new Date(data.startsAt);

  return {
    id: matchDocument.id,
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

function parseMatchStatus(status: unknown): MatchStatus {
  if (status === 'closed' || status === 'finished') {
    return status;
  }

  return 'upcoming';
}

function parseNullableScore(score: unknown) {
  return typeof score === 'number' ? score : null;
}

function formatResult(match?: Match) {
  if (!match || match.homeScore === null || match.awayScore === null) {
    return '-';
  }

  return `${match.homeScore} x ${match.awayScore}`;
}

function getStatusLabel(status?: MatchStatus) {
  if (status === 'finished') {
    return 'Finalizado';
  }

  if (status === 'closed') {
    return 'Palpites encerrados';
  }

  return 'Palpites abertos';
}

function getStatusTone(status?: MatchStatus) {
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
