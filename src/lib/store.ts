import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  theme: 'light' | 'dark';
  language: 'en' | 'vi';
  toggleTheme: () => void;
  setLanguage: (lang: 'en' | 'vi') => void;
}

export const useAppStore = create<AppState>()(
  persist(
    set => ({
      theme: 'light',
      language: 'en',
      toggleTheme: () =>
        set(state => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
      setLanguage: lang => set({ language: lang }),
    }),
    {
      name: 'app-storage',
    }
  )
);
