import { collection, onSnapshot, type QueryDocumentSnapshot } from 'firebase/firestore';
import { Medal, Trophy } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { db } from '../lib/firebase';

type RankingUser = {
  uid: string;
  name: string;
  sector: string;
  totalPoints: number;
  exactScores: number;
  winnerHits: number;
};

export function Ranking() {
  const [users, setUsers] = useState<RankingUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'users'),
      (snapshot) => {
        setUsers(snapshot.docs.map(mapUserDocument));
        setIsLoading(false);
        setError('');
      },
      () => {
        setError('Não foi possível carregar o ranking em tempo real.');
        setIsLoading(false);
      },
    );

    return unsubscribe;
  }, []);

  const sortedUsers = useMemo(
    () =>
      [...users].sort((firstUser, secondUser) => {
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
      }),
    [users],
  );

  return (
    <div className="page-shell">
      <PageHeader
        title="Ranking"
        description="Classificação geral dos participantes do Bolão Copa Mercado Sofia."
      />

      {error ? (
        <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </div>
      ) : null}

      <section className="panel overflow-hidden">
        <div className="hidden grid-cols-[0.45fr_1.2fr_0.8fr_0.6fr_0.6fr_0.7fr] border-b border-sofia-green/10 bg-sofia-green px-4 py-3 text-sm font-bold text-white md:grid">
          <span>Posição</span>
          <span>Nome</span>
          <span>Setor</span>
          <span>Pontos</span>
          <span>Exatos</span>
          <span>Vencedores</span>
        </div>

        {isLoading ? (
          <div className="p-5 text-sm font-semibold text-slate-600">Carregando ranking...</div>
        ) : null}

        {!isLoading && sortedUsers.length === 0 ? (
          <div className="p-5 text-sm font-semibold text-slate-600">
            Nenhum usuário encontrado no ranking.
          </div>
        ) : null}

        <div className="divide-y divide-sofia-green/10">
          {sortedUsers.map((user, index) => {
            const position = index + 1;
            const isTopThree = position <= 3;

            return (
              <article
                key={user.uid}
                className={[
                  'grid gap-3 px-4 py-4 md:grid-cols-[0.45fr_1.2fr_0.8fr_0.6fr_0.6fr_0.7fr] md:items-center',
                  isTopThree ? 'bg-sofia-gold/10' : 'bg-white',
                ].join(' ')}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={[
                      'flex h-10 w-10 items-center justify-center rounded-md font-black',
                      isTopThree ? 'bg-sofia-green text-white' : 'bg-sofia-gold/25 text-sofia-green',
                    ].join(' ')}
                  >
                    {position}
                  </span>
                  {isTopThree ? (
                    position === 1 ? (
                      <Trophy className="text-sofia-gold" aria-hidden size={20} />
                    ) : (
                      <Medal className="text-sofia-gold" aria-hidden size={19} />
                    )
                  ) : null}
                </div>
                <p className="font-bold text-sofia-green">{user.name || 'Sem nome'}</p>
                <p className="text-sm font-semibold text-slate-600">{user.sector || '-'}</p>
                <p className="font-black text-sofia-green">{user.totalPoints}</p>
                <p className="font-black text-sofia-gold">{user.exactScores}</p>
                <p className="font-black text-sofia-green">{user.winnerHits}</p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
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
