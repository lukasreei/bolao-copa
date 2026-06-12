import { onAuthStateChanged, type User } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { type ReactNode, useEffect, useMemo, useState } from 'react';
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

    setIsLoadingAuth(true);

    const unsubscribe = onSnapshot(
      doc(db, 'users', user.uid),
      (snapshot) => {
        const data = snapshot.data();

        setProfile(
          data
            ? {
                uid: String(data.uid ?? user.uid),
                name: String(data.name ?? ''),
                sector: String(data.sector ?? ''),
                email: String(data.email ?? user.email ?? ''),
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

    return unsubscribe;
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
