export type Theme = 'blue' | 'pink' | 'yellow' | 'dark';

export interface ThemeConfig {
  name: string;
  label: string;
  colors: {
    background: string;
    foreground: string;
    card: string;
    'card-foreground': string;
    popover: string;
    'popover-foreground': string;
    primary: string;
    'primary-foreground': string;
    secondary: string;
    'secondary-foreground': string;
    muted: string;
    'muted-foreground': string;
    accent: string;
    'accent-foreground': string;
    destructive: string;
    'destructive-foreground': string;
    border: string;
    input: string;
    ring: string;
  };
}

export const themes: Record<Theme, ThemeConfig> = {
  blue: {
    name: 'blue',
    label: 'Blue Theme',
    colors: {
      background: '0 0% 100%', // White
      foreground: '222.2 84% 4.9%', // Dark gray
      card: '0 0% 100%', // White
      'card-foreground': '222.2 84% 4.9%',
      popover: '0 0% 100%',
      'popover-foreground': '222.2 84% 4.9%',
      primary: '221.2 83.2% 53.3%', // Blue
      'primary-foreground': '210 40% 98%',
      secondary: '210 40% 96%',
      'secondary-foreground': '222.2 84% 4.9%',
      muted: '210 40% 96%',
      'muted-foreground': '215.4 16.3% 46.9%',
      accent: '210 40% 96%',
      'accent-foreground': '222.2 84% 4.9%',
      destructive: '0 84.2% 60.2%',
      'destructive-foreground': '210 40% 98%',
      border: '214.3 31.8% 91.4%',
      input: '214.3 31.8% 91.4%',
      ring: '221.2 83.2% 53.3%',
    },
  },
  pink: {
    name: 'pink',
    label: 'Pink Theme',
    colors: {
      background: '0 0% 100%', // White
      foreground: '222.2 84% 4.9%', // Dark gray
      card: '0 0% 100%', // White
      'card-foreground': '222.2 84% 4.9%',
      popover: '0 0% 100%',
      'popover-foreground': '222.2 84% 4.9%',
      primary: '346.8 77.2% 49.8%', // Pink
      'primary-foreground': '355.7 100% 97.3%',
      secondary: '210 40% 96%',
      'secondary-foreground': '222.2 84% 4.9%',
      muted: '210 40% 96%',
      'muted-foreground': '215.4 16.3% 46.9%',
      accent: '210 40% 96%',
      'accent-foreground': '222.2 84% 4.9%',
      destructive: '0 84.2% 60.2%',
      'destructive-foreground': '210 40% 98%',
      border: '214.3 31.8% 91.4%',
      input: '214.3 31.8% 91.4%',
      ring: '346.8 77.2% 49.8%',
    },
  },
  yellow: {
    name: 'yellow',
    label: 'Yellow Theme',
    colors: {
      background: '0 0% 100%', // White
      foreground: '222.2 84% 4.9%', // Dark gray
      card: '0 0% 100%', // White
      'card-foreground': '222.2 84% 4.9%',
      popover: '0 0% 100%',
      'popover-foreground': '222.2 84% 4.9%',
      primary: '47.9 95.8% 53.1%', // Yellow
      'primary-foreground': '26 83.3% 14.1%',
      secondary: '210 40% 96%',
      'secondary-foreground': '222.2 84% 4.9%',
      muted: '210 40% 96%',
      'muted-foreground': '215.4 16.3% 46.9%',
      accent: '210 40% 96%',
      'accent-foreground': '222.2 84% 4.9%',
      destructive: '0 84.2% 60.2%',
      'destructive-foreground': '210 40% 98%',
      border: '214.3 31.8% 91.4%',
      input: '214.3 31.8% 91.4%',
      ring: '47.9 95.8% 53.1%',
    },
  },
  dark: {
    name: 'dark',
    label: 'Dark Theme',
    colors: {
      background: '222.2 84% 4.9%', // Dark
      foreground: '210 40% 98%', // Light
      card: '222.2 84% 4.9%',
      'card-foreground': '210 40% 98%',
      popover: '222.2 84% 4.9%',
      'popover-foreground': '210 40% 98%',
      primary: '217.2 91.2% 59.8%', // Blue
      'primary-foreground': '222.2 84% 4.9%',
      secondary: '217.2 32.6% 17.5%',
      'secondary-foreground': '210 40% 98%',
      muted: '217.2 32.6% 17.5%',
      'muted-foreground': '215 20.2% 65.1%',
      accent: '217.2 32.6% 17.5%',
      'accent-foreground': '210 40% 98%',
      destructive: '0 62.8% 30.6%',
      'destructive-foreground': '210 40% 98%',
      border: '217.2 32.6% 17.5%',
      input: '217.2 32.6% 17.5%',
      ring: '224.3 76.3% 94.1%',
    },
  },
};

export function applyTheme(theme: Theme): void {
  const themeConfig = themes[theme];
  const root = document.documentElement;
  
  Object.entries(themeConfig.colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
  
  // Store theme preference
  localStorage.setItem('salonx-theme', theme);
}

export function getCurrentTheme(): Theme {
  if (typeof window === 'undefined') return 'blue';
  return (localStorage.getItem('salonx-theme') as Theme) || 'blue';
}

export function initializeTheme(): void {
  if (typeof window === 'undefined') return;
  const savedTheme = getCurrentTheme();
  applyTheme(savedTheme);
} 