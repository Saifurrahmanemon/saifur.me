'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Theme } from '~/utils/theme-providers';
import { MoonIcon, SunIcon } from './icons';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const handleToggleTheme = () => {
    const updatedTheme =
      theme === Theme.Dark || resolvedTheme === Theme.Dark
        ? Theme.Light
        : Theme.Dark;
    setTheme(updatedTheme);
  };

  return (
    <>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-1 ring-gray-300  transition-all"
        onClick={handleToggleTheme}
      >
        <AnimatePresence>
          <motion.div
            key={theme === Theme.Dark ? 'moon' : 'sun'}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {mounted &&
            (theme === Theme.Dark || resolvedTheme === Theme.Dark) ? (
              <MoonIcon />
            ) : (
              <SunIcon />
            )}
          </motion.div>
        </AnimatePresence>
      </button>
    </>
  );
};

export default ThemeSwitch;
