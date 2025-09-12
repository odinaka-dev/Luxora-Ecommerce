import { type StateCreator } from "zustand";

import { type SignUpType } from "../../src/types/auth";

export interface AuthSlice {
  isHydrated: boolean;
  isLoggedIn: boolean;
  newUser: SignUpType | null;
  setIsHydrated: (isHydrated: boolean) => void;
  setIsLoggedIn: (isLoggedin: boolean) => void;
  setNewUser: (newUser: SignUpType | null) => void;
  resetAuth: () => void;
}

export type AuthState = {
  isHydrated: boolean;
  isLoggedIn: boolean;
  newUser: SignUpType | null;
};

export const defaultAuthState: AuthState = {
  isHydrated: false,
  isLoggedIn: false,
  newUser: null,
};

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  ...defaultAuthState,
  setIsHydrated: (isHydrated: boolean) => set({ isHydrated }),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  setNewUser: (newUser: SignUpType | null) => set({ newUser }),
  resetAuth: () => set(defaultAuthState),
});
