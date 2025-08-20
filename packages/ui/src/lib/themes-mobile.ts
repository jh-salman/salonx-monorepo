export type Theme = 'blue' | 'pink' | 'yellow' | 'dark';

export interface ThemeConfig {
  name: string;
  label: string;
  colors: {
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
    muted: string;
    border: string;
    card: string;
  };
}

export const themes: Record<Theme, ThemeConfig> = {
  blue: {
    name: 'blue',
    label: 'Blue Theme',
    colors: {
      background: 'bg-white',
      foreground: 'text-gray-900',
      primary: 'bg-blue-500',
      secondary: 'bg-gray-100',
      muted: 'bg-gray-50',
      border: 'border-gray-200',
      card: 'bg-white',
    },
  },
  pink: {
    name: 'pink',
    label: 'Pink Theme',
    colors: {
      background: 'bg-white',
      foreground: 'text-gray-900',
      primary: 'bg-pink-500',
      secondary: 'bg-gray-100',
      muted: 'bg-gray-50',
      border: 'border-gray-200',
      card: 'bg-white',
    },
  },
  yellow: {
    name: 'yellow',
    label: 'Yellow Theme',
    colors: {
      background: 'bg-white',
      foreground: 'text-gray-900',
      primary: 'bg-yellow-500',
      secondary: 'bg-gray-100',
      muted: 'bg-gray-50',
      border: 'border-gray-200',
      card: 'bg-white',
    },
  },
  dark: {
    name: 'dark',
    label: 'Dark Theme',
    colors: {
      background: 'bg-gray-900',
      foreground: 'text-white',
      primary: 'bg-blue-500',
      secondary: 'bg-gray-800',
      muted: 'bg-gray-700',
      border: 'border-gray-600',
      card: 'bg-gray-800',
    },
  },
};

export function getThemeColors(theme: Theme) {
  return themes[theme].colors;
} 