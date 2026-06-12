import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { UserPlus } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../lib/firebase';

export function Cadastro() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [sector, setSector] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('As senhas não conferem.');
      return;
    }

    setIsSubmitting(true);

    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(credential.user, {
        displayName: name,
      });

      await setDoc(doc(db, 'users', credential.user.uid), {
        uid: credential.user.uid,
        name,
        sector,
        email: credential.user.email,
        role: 'employee',
        totalPoints: 0,
        exactScores: 0,
        winnerHits: 0,
        createdAt: serverTimestamp(),
      });

      navigate('/dashboard');
    } catch (caughtError) {
      if (caughtError instanceof FirebaseError) {
        setError(getCadastroErrorMessage(caughtError.code));
      } else {
        setError('Não foi possível criar o cadastro agora. Tente novamente.');
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-sofia-cream px-4 py-8">
      <section className="panel w-full max-w-xl p-5 sm:p-7">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-sofia-green text-white">
            <UserPlus aria-hidden size={22} />
          </span>
          <div>
            <h1 className="text-2xl font-black text-sofia-green">Cadastro</h1>
            <p className="text-sm text-slate-600">Entre para registrar seus palpites.</p>
          </div>
        </div>

        <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
          <label className="block sm:col-span-2">
            <span className="mb-1 block text-sm font-semibold text-sofia-green">Nome completo</span>
            <input
              className="field"
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-sofia-green">Setor</span>
            <select
              className="field"
              value={sector}
              onChange={(event) => setSector(event.target.value)}
              required
            >
              <option value="" disabled>Selecione</option>
              <option>Caixa</option>
              <option>Padaria</option>
              <option>Hortifruti</option>
              <option>Estoque</option>
              <option>Administrativo</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-sofia-green">E-mail</span>
            <input
              className="field"
              type="email"
              placeholder="voce@mercadosofia.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-sofia-green">Senha</span>
            <input
              className="field"
              type="password"
              placeholder="Crie uma senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength={6}
              required
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-sofia-green">Confirmar senha</span>
            <input
              className="field"
              type="password"
              placeholder="Repita a senha"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              minLength={6}
              required
            />
          </label>
          {error ? (
            <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 sm:col-span-2">
              {error}
            </p>
          ) : null}
          <button className="primary-button disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Criando cadastro...' : 'Criar cadastro'}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-600">
          Já tem acesso?{' '}
          <Link className="font-bold text-sofia-green underline-offset-4 hover:underline" to="/login">
            Entrar
          </Link>
        </p>
      </section>
    </main>
  );
}

function getCadastroErrorMessage(code: string) {
  if (code === 'auth/email-already-in-use') {
    return 'Este e-mail já está cadastrado.';
  }

  if (code === 'auth/weak-password') {
    return 'Use uma senha com pelo menos 6 caracteres.';
  }

  if (code === 'auth/invalid-email') {
    return 'Digite um e-mail válido.';
  }

  return 'Não foi possível criar o cadastro agora. Tente novamente.';
}
