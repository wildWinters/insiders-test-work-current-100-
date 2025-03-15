import { create } from "zustand";

interface HeaderFunctionality {
  isUserLoggedIn: boolean;
  registrateUser: () => void;
  unregisterUser: () => void; 
}

const useHeaderStore = create<HeaderFunctionality>((set) => ({
  isUserLoggedIn: false,
  registrateUser: () => set({ isUserLoggedIn: true }),
  unregisterUser: () => set({isUserLoggedIn: false}),
}));

export default useHeaderStore;
