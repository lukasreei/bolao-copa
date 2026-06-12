import { createContext } from 'react';
import type { User } from 'firebase/auth';

export type UserProfile = {
  uid: string;
  name: string;
  sector: string;
  email: string;
  role: 'admin' | 'employee';
  totalPoints: number;
  exactScores: number;
  winnerHits: number;
};

export type AuthContextValue = {
  user: User | null;
  profile: UserProfile | null;
  isAdmin: boolean;
  isLoadingAuth: boolean;
};

export const AuthContext = createContext<AuthContextValue | null>(null);
