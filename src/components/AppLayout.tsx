import { Outlet } from 'react-router-dom';
import { BottomNavigation } from './BottomNavigation';
import { TopNavbar } from './TopNavbar';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-sofia-cream pb-20 md:pb-0">
      <TopNavbar />
      <main>
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
}
