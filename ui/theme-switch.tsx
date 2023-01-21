'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Theme } from '~/utils/theme-providers';
import { MoonIcon, SunIcon } from './icons';

// TODO: design the theme switch component

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
        onClick={() =>
          setTheme(
            theme === Theme.Dark || resolvedTheme === Theme.Dark
              ? Theme.Light
              : Theme.Dark
          )
        }
      >
        {mounted && (theme === Theme.Dark || resolvedTheme === Theme.Dark) ? (
          <MoonIcon />
        ) : (
          <SunIcon />
        )}
      </button>
    </>
  );
};

export default ThemeSwitch;
