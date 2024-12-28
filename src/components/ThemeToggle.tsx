import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../utils/theme';

export const ThemeToggle = () => {
  const { isDark, setTheme } = useThemeStore();

  return (
    <div className="flex space-x-2 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setTheme(false)}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200
          ${!isDark 
            ? 'bg-white text-yellow-500 shadow-sm' 
            : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
          }`}
      >
        <Sun size={18} />
        <span className="text-sm font-medium">Light</span>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setTheme(true)}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200
          ${isDark 
            ? 'bg-gray-800 text-blue-400 shadow-sm' 
            : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
          }`}
      >
        <Moon size={18} />
        <span className="text-sm font-medium">Dark</span>
      </motion.button>
    </div>
  );
};