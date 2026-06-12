import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Lock, Mail, Trophy } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (caughtError) {
      if (caughtError instanceof FirebaseError) {
        setError(getLoginErrorMessage(caughtError.code));
      } else {
        setError('Não foi possível entrar agora. Tente novamente.');
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="grid min-h-screen bg-sofia-cream md:grid-cols-[1.05fr_0.95fr]">
      <section className="flex min-h-[36vh] items-end bg-sofia-green px-6 py-8 text-white md:min-h-screen md:items-center md:px-12">
        <div className="max-w-xl">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-sofia-gold text-sofia-green">
            <Trophy aria-hidden size={30} />
          </div>
          <h1 className="text-4xl font-black sm:text-5xl">Bolão Copa Mercado Sofia</h1>
          <p className="mt-4 max-w-md text-base leading-7 text-white/80">
            Área interna para acompanhar jogos, registrar palpites e celebrar a Copa
            2026 com a equipe.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center px-4 py-8">
        <div className="panel w-full max-w-md p-5 sm:p-7">
          <h2 className="text-2xl font-black text-sofia-green">Entrar</h2>
          <p className="mt-2 text-sm text-slate-600">Acesse com seu e-mail corporativo.</p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-sofia-green">E-mail</span>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sofia-green/50" size={18} />
                <input
                  className="field pl-10"
                  type="email"
                  placeholder="voce@mercadosofia.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-sofia-green">Senha</span>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sofia-green/50" size={18} />
                <input
                  className="field pl-10"
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
            </label>
            {error ? (
              <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">
                {error}
              </p>
            ) : null}
            <button className="primary-button w-full disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-600">
            Ainda não participa?{' '}
            <Link className="font-bold text-sofia-green underline-offset-4 hover:underline" to="/cadastro">
              Criar cadastro
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

function getLoginErrorMessage(code: string) {
  if (code === 'auth/invalid-credential' || code === 'auth/user-not-found' || code === 'auth/wrong-password') {
    return 'E-mail ou senha inválidos.';
  }

  if (code === 'auth/too-many-requests') {
    return 'Muitas tentativas. Aguarde um pouco e tente novamente.';
  }

  return 'Não foi possível entrar agora. Tente novamente.';
}
