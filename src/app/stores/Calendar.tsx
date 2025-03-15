import { create } from "zustand";

interface UseCalendar {
  isCalendarModal: boolean;
  selectedDay: number | null;
  activateCalendarModal: () => void;
  deactivateCalendarModal: () => void;
  setSelectedDay: (day: number | null) => void;
  getDataFromModal?:()=>void;
}



export const useCalendar = create<UseCalendar>((set) => ({
  selectedDay: null,
  isCalendarModal: false,
  activateCalendarModal: () => set({ isCalendarModal: true }),
  deactivateCalendarModal: () => set({ isCalendarModal: false }),
  setSelectedDay: day => set({ selectedDay: day }),
  
}));
