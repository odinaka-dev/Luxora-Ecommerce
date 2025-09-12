import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { type AuthSlice, createAuthSlice } from "../slices/authSlice";

export interface StoreSlice extends AuthSlice {
  resetStore: () => void;
}

let zustandSet: any;

export const useStore = create<AuthSlice>()(
  devtools(
    persist(
      (set, get, store) => {
        zustandSet = set;
        return {
          ...createAuthSlice(set, get, store),
          resetStore: () => {
            get().resetAuth();
          },
        };
      },
      { name: "auth-store" }
    )
  )
);
