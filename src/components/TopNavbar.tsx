import { LogOut, Trophy } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/jogos', label: 'Jogos' },
  { to: '/meus-palpites', label: 'Meus Palpites' },
  { to: '/campeao', label: 'Campeão' },
  { to: '/ranking', label: 'Ranking' },
];

export function TopNavbar() {
  const { isAdmin } = useAuth();
  const visibleLinks = isAdmin ? [...links, { to: '/admin', label: 'Admin' }] : links;

  return (
    <header className="sticky top-0 z-30 border-b border-sofia-green/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/dashboard" className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-sofia-green text-white">
            <Trophy aria-hidden size={22} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-black uppercase text-sofia-green sm:text-base">
              Bolão Copa
            </span>
            <span className="block truncate text-xs font-semibold text-sofia-green/70">
              Mercado Sofia
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {visibleLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  'rounded-md px-3 py-2 text-sm font-semibold transition',
                  isActive
                    ? 'bg-sofia-green text-white'
                    : 'text-sofia-green hover:bg-sofia-cream',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/login" className="secondary-button hidden md:inline-flex">
          <LogOut aria-hidden size={17} />
          Sair
        </Link>
      </div>
    </header>
  );
}
