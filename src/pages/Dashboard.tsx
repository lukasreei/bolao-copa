import { CalendarDays, Medal, Target, Users } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { StatusBadge } from '../components/StatusBadge';
import { guesses, matches, ranking } from '../data/mockData';

const stats = [
  { label: 'Jogos cadastrados', value: matches.length, icon: CalendarDays },
  { label: 'Meus palpites', value: guesses.length, icon: Target },
  { label: 'Participantes', value: 42, icon: Users },
  { label: 'Minha posição', value: '8º', icon: Medal },
];

export function Dashboard() {
  const nextMatch = matches.find((match) => match.status === 'aberto');

  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Copa 2026"
        title="Dashboard"
        description="Resumo dos jogos, desempenho e próximos palpites do Bolão Copa Mercado Sofia."
      />

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
            <h2 className="text-lg font-black text-sofia-green">Próximo jogo</h2>
            <StatusBadge tone="green">Palpite aberto</StatusBadge>
          </div>
          {nextMatch ? (
            <div className="mt-5 rounded-lg bg-sofia-cream p-4">
              <p className="text-sm font-bold text-sofia-gold">{nextMatch.group}</p>
              <div className="mt-3 flex items-center justify-between gap-3 text-center">
                <strong className="flex-1 text-xl text-sofia-green">{nextMatch.home}</strong>
                <span className="rounded-md bg-white px-3 py-2 text-sm font-black text-sofia-green shadow-sm">x</span>
                <strong className="flex-1 text-xl text-sofia-green">{nextMatch.away}</strong>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                {nextMatch.date} · {nextMatch.venue}
              </p>
            </div>
          ) : null}
        </article>

        <article className="panel p-5">
          <h2 className="text-lg font-black text-sofia-green">Top 3 ranking</h2>
          <div className="mt-4 space-y-3">
            {ranking.slice(0, 3).map((user) => (
              <div key={user.position} className="flex items-center gap-3 rounded-lg border border-sofia-green/10 p-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-sofia-green text-sm font-black text-white">
                  {user.position}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold text-sofia-green">{user.name}</p>
                  <p className="text-xs font-semibold text-slate-500">{user.department}</p>
                </div>
                <strong className="text-sofia-gold">{user.points} pts</strong>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
