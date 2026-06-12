import { Medal } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { ranking } from '../data/mockData';

export function Ranking() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Ranking"
        description="Classificação geral dos participantes do Bolão Copa Mercado Sofia."
      />

      <section className="panel overflow-hidden">
        <div className="hidden grid-cols-[0.4fr_1.2fr_0.8fr_0.6fr_0.6fr] border-b border-sofia-green/10 bg-sofia-green px-4 py-3 text-sm font-bold text-white md:grid">
          <span>Posição</span>
          <span>Nome</span>
          <span>Setor</span>
          <span>Pontos</span>
          <span>Exatos</span>
        </div>
        <div className="divide-y divide-sofia-green/10">
          {ranking.map((user) => (
            <article key={user.position} className="grid gap-3 px-4 py-4 md:grid-cols-[0.4fr_1.2fr_0.8fr_0.6fr_0.6fr] md:items-center">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-sofia-gold/25 font-black text-sofia-green">
                  {user.position}
                </span>
                {user.position <= 3 ? <Medal className="text-sofia-gold" aria-hidden size={19} /> : null}
              </div>
              <p className="font-bold text-sofia-green">{user.name}</p>
              <p className="text-sm font-semibold text-slate-600">{user.department}</p>
              <p className="font-black text-sofia-green">{user.points}</p>
              <p className="font-black text-sofia-gold">{user.exact}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
