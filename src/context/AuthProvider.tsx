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
    let isCancelled = false;
    let unsubscribeProfile: (() => void) | undefined;

    setIsLoadingAuth(true);

    async function subscribeToProfile() {
      const userRef = doc(db, 'users', currentUser.uid);

      if (isBootstrapAdminEmail(currentUser.email)) {
        await setDoc(
          userRef,
          {
            uid: currentUser.uid,
            name: currentUser.displayName || 'Administrador',
            sector: 'Administração',
            email: currentUser.email,
            role: 'admin',
            totalPoints: 0,
            exactScores: 0,
            winnerHits: 0,
            updatedAt: serverTimestamp(),
          },
          { merge: true },
        );
      }

      if (isCancelled) {
        return;
      }

      unsubscribeProfile = onSnapshot(
        userRef,
        (snapshot) => {
          const data = snapshot.data();

          setProfile(
            data
              ? {
                  uid: String(data.uid ?? currentUser.uid),
                  name: String(data.name ?? ''),
                  sector: String(data.sector ?? ''),
                  email: String(data.email ?? currentUser.email ?? ''),
                  role: data.role === 'admin' ? 'admin' : 'employee',
                  totalPoints: Number(data.totalPoints ?? 0),
                  exactScores: Number(data.exactScores ?? 0),
                  winnerHits: Number(data.winnerHits ?? 0),
                }
              : null,
          );
          setIsLoadingAuth(false);
        },
        () => {
          setProfile(null);
          setIsLoadingAuth(false);
        },
      );
    }

    subscribeToProfile().catch(() => {
      if (!isCancelled) {
        setProfile(null);
        setIsLoadingAuth(false);
      }
    });

    return () => {
      isCancelled = true;
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
