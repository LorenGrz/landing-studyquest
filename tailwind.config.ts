import type { Config } from 'tailwindcss';

// Same semantic token names/values as the app's own Tailwind v4 @theme
// (frontend/src/index.css, dark mode) — kept in sync by hand since this is
// a separate Next.js project.
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0d0d18',
        surface: '#13131f',
        'surface-alt': '#1a1a2e',
        'surface-input': '#1e1e30',
        primary: '#7c3aed',
        'primary-light': '#9d5df7',
        'on-primary': '#ffffff',
        'on-surface': '#f0f0ff',
        'on-surface-variant': '#8888aa',
        'outline-variant': 'rgba(255,255,255,0.12)',
        success: '#10b981',
        danger: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'page-gradient': 'linear-gradient(180deg, #0d0d18 0%, #1a0a2e 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
