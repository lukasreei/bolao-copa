import { CalendarPlus, CheckCircle2, UsersRound } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';

export function Admin() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Admin"
        description="Área para gerenciar jogos, resultados e participantes do sistema interno."
      />

      <section className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="panel p-5">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-sofia-green text-white">
              <CalendarPlus aria-hidden size={21} />
            </span>
            <h2 className="text-lg font-black text-sofia-green">Cadastrar jogo</h2>
          </div>

          <form className="grid gap-4 sm:grid-cols-2">
            <input className="field" placeholder="Seleção mandante" />
            <input className="field" placeholder="Seleção visitante" />
            <input className="field" placeholder="Grupo" />
            <input className="field" placeholder="Local" />
            <input className="field" type="datetime-local" />
            <select className="field" defaultValue="aberto">
              <option value="aberto">Palpite aberto</option>
              <option value="encerrado">Encerrado</option>
              <option value="finalizado">Finalizado</option>
            </select>
            <button className="primary-button sm:col-span-2" type="button">
              Salvar jogo
            </button>
          </form>
        </article>

        <div className="grid gap-4">
          <article className="panel p-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-sofia-gold/25 text-sofia-green">
                <CheckCircle2 aria-hidden size={21} />
              </span>
              <h2 className="text-lg font-black text-sofia-green">Lançar resultado</h2>
            </div>
            <form className="grid grid-cols-[1fr_auto_1fr] gap-2 sm:grid-cols-[1fr_auto_1fr_auto]">
              <input className="field text-center" inputMode="numeric" placeholder="0" />
              <span className="self-center font-black text-sofia-green">x</span>
              <input className="field text-center" inputMode="numeric" placeholder="0" />
              <button className="secondary-button col-span-3 sm:col-span-1" type="button">
                Atualizar
              </button>
            </form>
          </article>

          <article className="panel p-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-sofia-green text-white">
                <UsersRound aria-hidden size={21} />
              </span>
              <h2 className="text-lg font-black text-sofia-green">Participantes</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-sofia-cream p-4">
                <p className="text-sm font-semibold text-slate-600">Ativos</p>
                <p className="mt-1 text-2xl font-black text-sofia-green">42</p>
              </div>
              <div className="rounded-lg bg-sofia-cream p-4">
                <p className="text-sm font-semibold text-slate-600">Setores</p>
                <p className="mt-1 text-2xl font-black text-sofia-green">6</p>
              </div>
              <div className="rounded-lg bg-sofia-cream p-4">
                <p className="text-sm font-semibold text-slate-600">Palpites</p>
                <p className="mt-1 text-2xl font-black text-sofia-green">118</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
