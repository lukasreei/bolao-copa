import { PageHeader } from '../components/PageHeader';
import { StatusBadge } from '../components/StatusBadge';
import { guesses } from '../data/mockData';

export function MeusPalpites() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Meus Palpites"
        description="Acompanhe seus palpites registrados, pontos conquistados e jogos ainda aguardando resultado."
      />

      <section className="panel overflow-hidden">
        <div className="hidden grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr] border-b border-sofia-green/10 bg-sofia-green px-4 py-3 text-sm font-bold text-white md:grid">
          <span>Jogo</span>
          <span>Palpite</span>
          <span>Pontos</span>
          <span>Status</span>
        </div>
        <div className="divide-y divide-sofia-green/10">
          {guesses.map((guess) => (
            <article key={guess.id} className="grid gap-3 px-4 py-4 md:grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr] md:items-center">
              <div>
                <p className="text-xs font-bold uppercase text-slate-500 md:hidden">Jogo</p>
                <p className="font-bold text-sofia-green">{guess.match}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-slate-500 md:hidden">Palpite</p>
                <p className="font-black text-sofia-green">{guess.guess}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-slate-500 md:hidden">Pontos</p>
                <p className="font-black text-sofia-gold">{guess.points}</p>
              </div>
              <StatusBadge tone={guess.status === 'pontuado' ? 'gold' : guess.status === 'registrado' ? 'green' : 'neutral'}>
                {guess.status === 'pontuado' ? 'Pontuado' : guess.status === 'registrado' ? 'Registrado' : 'Aguardando'}
              </StatusBadge>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
