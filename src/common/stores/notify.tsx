import { create } from 'zustand';

export interface InitialModalState {
  isOpen: boolean;
  text: string;
}

export interface InitialModalAction {
  showNotify(): void;
  hideNotify(): void;
  setNotifyText(text: string): void;
}

export const useNotifyStore = create<InitialModalState & InitialModalAction>()(
  set => ({
    isOpen: false,
    text: '',
    showNotify: () => set({ isOpen: true }),
    hideNotify: () => set({ isOpen: false }),
    setNotifyText: (text: string) => set({ text }),
  })
);
