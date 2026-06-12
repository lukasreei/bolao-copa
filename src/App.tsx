import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { Admin } from './pages/Admin';
import { Cadastro } from './pages/Cadastro';
import { Campeao } from './pages/Campeao';
import { Dashboard } from './pages/Dashboard';
import { Jogos } from './pages/Jogos';
import { Login } from './pages/Login';
import { MeusPalpites } from './pages/MeusPalpites';
import { Ranking } from './pages/Ranking';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/meus-palpites" element={<MeusPalpites />} />
        <Route path="/campeao" element={<Campeao />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}
