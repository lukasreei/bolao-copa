import { BarChart3, Crown, Home, ListChecks, ShieldCheck, Trophy } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const items = [
  { to: '/dashboard', label: 'Início', icon: Home },
  { to: '/jogos', label: 'Jogos', icon: ListChecks },
  { to: '/meus-palpites', label: 'Palpites', icon: ShieldCheck },
  { to: '/campeao', label: 'Campeão', icon: Crown },
  { to: '/ranking', label: 'Ranking', icon: Trophy },
];

export function BottomNavigation() {
  const { isAdmin } = useAuth();
  const visibleItems = isAdmin ? [...items, { to: '/admin', label: 'Admin', icon: BarChart3 }] : items;

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-sofia-green/10 bg-white/95 px-2 py-2 backdrop-blur md:hidden">
      <div className="flex gap-1 overflow-x-auto">
        {visibleItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'flex h-14 min-w-16 flex-col items-center justify-center gap-1 rounded-md text-[11px] font-semibold transition',
                  isActive
                    ? 'bg-sofia-green text-white'
                    : 'text-sofia-green hover:bg-sofia-cream',
                ].join(' ')
              }
            >
              <Icon aria-hidden size={19} strokeWidth={2.2} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
