'use client';

import { useState, useEffect } from 'react';

interface Theme {
  dark: boolean;
  systemTheme?: boolean;
}

export default function DarkModeToggle(): JSX.Element {
  const [theme, setTheme] = useState<Theme>({ dark: false });

  useEffect(() => {
    // Check for system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setTheme({ dark: savedTheme === 'dark' });
    } else {
      setTheme({ dark: prefersDark, systemTheme: true });
    }

    // Apply initial theme
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  useEffect(() => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent): void => {
      if (theme.systemTheme) {
        setTheme({ dark: e.matches, systemTheme: true });
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme.systemTheme]);

  const toggleDarkMode = (): void => {
    setTheme((prev) => {
      const newTheme = { dark: !prev.dark, systemTheme: false };
      localStorage.setItem('theme', newTheme.dark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newTheme.dark);
      return newTheme;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle Dark Mode"
      title={theme.systemTheme ? 'Using system theme' : 'Toggle theme'}
    >
      {theme.dark ? '🌙' : '☀️'}
    </button>
  );
}
