import { create } from "zustand";

interface HeaderFunctionality {
  isUserLoggedIn: boolean;
  isModalActive : boolean;
  registerUser: () => void;
  unregisterUser: () => void; 
  setModalTrue: () => void;
  setModalFalse: () => void;
}
const useHeaderStore = create<HeaderFunctionality>((set) => ({
  isUserLoggedIn: false,
  isModalActive: false,
  registerUser: () => set({ isUserLoggedIn: true }),
  unregisterUser: () => set({isUserLoggedIn: false}),
  setModalTrue: () => set({isModalActive:true}),
  setModalFalse: () => set({isModalActive:false}), 
}));

export default useHeaderStore;


