import { Target, Trophy } from 'lucide-react';
import { CHAMPION_PREDICTION_POINTS } from '../config/championPrediction';
import { EXACT_SCORE_POINTS, OUTCOME_POINTS } from '../lib/scoring';

const rules = [
  { label: 'Placar exato', value: EXACT_SCORE_POINTS },
  { label: 'Vencedor/empate', value: OUTCOME_POINTS },
  { label: 'Campeão', value: CHAMPION_PREDICTION_POINTS },
];

export function ScoringRules() {
  return (
    <section className="panel mb-4 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-sofia-gold/25 text-sofia-green">
            <Target aria-hidden size={21} />
          </span>
          <h2 className="text-lg font-black text-sofia-green">Pontuação</h2>
        </div>
        <Trophy className="text-sofia-gold" aria-hidden size={22} />
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {rules.map((rule) => (
          <div key={rule.label} className="rounded-lg bg-sofia-cream p-3">
            <p className="text-xs font-bold uppercase text-slate-500">{rule.label}</p>
            <p className="mt-1 text-xl font-black text-sofia-green">{rule.value} pontos</p>
          </div>
        ))}
      </div>
    </section>
  );
}
