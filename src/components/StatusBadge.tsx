type StatusBadgeProps = {
  children: string;
  tone?: 'green' | 'gold' | 'neutral';
};

export function StatusBadge({ children, tone = 'neutral' }: StatusBadgeProps) {
  const tones = {
    green: 'bg-sofia-green/10 text-sofia-green',
    gold: 'bg-sofia-gold/20 text-amber-800',
    neutral: 'bg-slate-100 text-slate-600',
  };

  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${tones[tone]}`}>
      {children}
    </span>
  );
}
