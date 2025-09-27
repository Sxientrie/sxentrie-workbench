import React from 'react';
import { useTheme } from '../../../contexts/ThemeProvider';
import { Button } from '../../base/button';
import { Sun, Moon } from '../../base/icons';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const effectiveTheme =
    theme === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : theme;

  const toggleTheme = () => {
    const newTheme = effectiveTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {effectiveTheme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
};
