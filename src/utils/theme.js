import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  isDark: false,
  setTheme: (dark) => set({ isDark: dark }),
}));