'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

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
            theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark'
          )
        }
      >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark')
          ? 'dark'
          : 'light'}
      </button>
      <p className="my-2">
        current theme is <strong>{theme}</strong>
      </p>
    </>
  );
};

export default ThemeSwitch;
