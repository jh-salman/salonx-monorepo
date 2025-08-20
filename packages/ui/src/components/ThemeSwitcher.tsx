import React from 'react';
import { cn } from '../lib/utils';
import { Theme, themes, applyTheme } from '../lib/themes';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const handleThemeChange = (theme: Theme) => {
    applyTheme(theme);
  };

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {Object.entries(themes).map(([key, theme]) => (
        <button
          key={key}
          onClick={() => handleThemeChange(key as Theme)}
          className={cn(
            'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
            'border-2 border-transparent hover:border-current',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            {
              'bg-blue-500 text-white hover:bg-blue-600': key === 'blue',
              'bg-pink-500 text-white hover:bg-pink-600': key === 'pink',
              'bg-yellow-500 text-gray-900 hover:bg-yellow-600': key === 'yellow',
              'bg-gray-800 text-white hover:bg-gray-900': key === 'dark',
            }
          )}
        >
          {theme.label}
        </button>
      ))}
    </div>
  );
} 