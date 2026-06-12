import { onAuthStateChanged, type User } from 'firebase/auth';
import { doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { type ReactNode, useEffect, useMemo, useState } from 'react';
import { isBootstrapAdminEmail } from '../config/admin';
import { auth, db } from '../lib/firebase';
import { AuthContext, type UserProfile } from './AuthContext';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setProfile(null);

      if (!currentUser) {
        setIsLoadingAuth(false);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) {
      return;
    }

    const currentUser = user;
    const isBootstrapAdmin = isBootstrapAdminEmail(currentUser.email);
    let isCancelled = false;
    let unsubscribeProfile: (() => void) | undefined;
    let hasResolvedProfile = false;

    setIsLoadingAuth(true);

    if (isBootstrapAdmin) {
      console.log('AuthProvider: admin bootstrap detectado, liberando perfil local.');
      setProfile(createBootstrapAdminProfile(currentUser));
      setIsLoadingAuth(false);
    }

    const loadingFallback = window.setTimeout(() => {
      if (isCancelled || hasResolvedProfile) {
        return;
      }

      console.error('AuthProvider: timeout ao carregar perfil, usando fallback local.');
      setProfile(isBootstrapAdmin ? createBootstrapAdminProfile(currentUser) : null);
      setIsLoadingAuth(false);
    }, 8000);

    const userRef = doc(db, 'users', currentUser.uid);

    try {
      unsubscribeProfile = onSnapshot(
        userRef,
        (snapshot) => {
          hasResolvedProfile = true;
          window.clearTimeout(loadingFallback);

          const data = snapshot.data();
          console.log('AuthProvider: snapshot de perfil recebido.', {
            uid: currentUser.uid,
            exists: snapshot.exists(),
            isBootstrapAdmin,
          });

          setProfile(
            data
              ? mapUserProfile(data, currentUser, isBootstrapAdmin)
              : isBootstrapAdmin
                ? createBootstrapAdminProfile(currentUser)
                : null,
          );
          setIsLoadingAuth(false);
        },
        (error) => {
          hasResolvedProfile = true;
          window.clearTimeout(loadingFallback);

          console.error('AuthProvider: erro ao carregar perfil do usuário:', error);
          setProfile(isBootstrapAdmin ? createBootstrapAdminProfile(currentUser) : null);
          setIsLoadingAuth(false);
        },
      );
    } catch (error) {
      hasResolvedProfile = true;
      window.clearTimeout(loadingFallback);

      console.error('AuthProvider: erro ao iniciar assinatura do perfil:', error);
      setProfile(isBootstrapAdmin ? createBootstrapAdminProfile(currentUser) : null);
      setIsLoadingAuth(false);
    }

    if (isBootstrapAdmin) {
      void bootstrapAdminProfile(currentUser, userRef);
    }

    async function bootstrapAdminProfile(adminUser: User, adminUserRef: ReturnType<typeof doc>) {
      try {
        console.log('AuthProvider: tentando criar/atualizar admin bootstrap no Firestore.');

        await setDoc(
          adminUserRef,
          {
            uid: adminUser.uid,
            name: adminUser.displayName || 'Administrador',
            sector: 'Administração',
            email: adminUser.email,
            role: 'admin',
            totalPoints: 0,
            exactScores: 0,
            winnerHits: 0,
            updatedAt: serverTimestamp(),
          },
          { merge: true },
        );

        console.log('AuthProvider: admin bootstrap sincronizado no Firestore.');
      } catch (error) {
        console.error('AuthProvider: erro ao criar/atualizar admin bootstrap:', error);
      }
    }

    return () => {
      isCancelled = true;
      window.clearTimeout(loadingFallback);
      unsubscribeProfile?.();
    };
  }, [user]);

  const value = useMemo(
    () => ({
      user,
      profile,
      isAdmin: profile?.role === 'admin',
      isLoadingAuth,
    }),
    [isLoadingAuth, profile, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function mapUserProfile(
  data: Record<string, unknown>,
  user: User,
  forceAdmin: boolean,
): UserProfile {
  return {
    uid: String(data.uid ?? user.uid),
    name: String(data.name ?? ''),
    sector: String(data.sector ?? ''),
    email: String(data.email ?? user.email ?? ''),
    role: forceAdmin || data.role === 'admin' ? 'admin' : 'employee',
    totalPoints: Number(data.totalPoints ?? 0),
    exactScores: Number(data.exactScores ?? 0),
    winnerHits: Number(data.winnerHits ?? 0),
  };
}

function createBootstrapAdminProfile(user: User): UserProfile {
  return {
    uid: user.uid,
    name: user.displayName || 'Administrador',
    sector: 'Administração',
    email: user.email ?? '',
    role: 'admin',
    totalPoints: 0,
    exactScores: 0,
    winnerHits: 0,
  };
}
