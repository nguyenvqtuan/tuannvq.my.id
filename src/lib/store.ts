import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  language: 'en' | 'vi';
  setLanguage: (lang: 'en' | 'vi') => void;
}

export const useAppStore = create<AppState>();
persist(
  set => ({
    language: 'en',
    setLanguage: (lang: 'en' | 'vi') => set({ language: lang }),
  }),
  {
    name: 'app-storage',
  }
);
