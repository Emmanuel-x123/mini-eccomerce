// stores/uiStore.ts
import { create } from 'zustand';

interface UIState {
  showCart: boolean;
  setShowCart: (show: boolean) => void;
}

export const useUIStore = create<UIState>()((set) => ({
  showCart: false,
  setShowCart: (show) => set({ showCart: show }),
}));