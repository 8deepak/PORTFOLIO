import { create } from 'zustand';

type ThemeStore = {
  isDark: boolean;
  setTheme: (dark: boolean) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  isDark: false,
  setTheme: (dark: boolean) => set({ isDark: dark }),
}));