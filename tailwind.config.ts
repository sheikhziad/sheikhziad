import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          0: '#000000',
          50: '#05060a',
          100: '#0a0c14',
          200: '#10131c',
          300: '#181c28',
          400: '#262b3a',
          500: '#3a4156',
          600: '#5b6479',
          700: '#8d97ab',
          800: '#c4cbd9',
          900: '#f5f7fb',
        },
        neon: {
          cyan: '#00f0ff',
          magenta: '#ff2bd6',
          violet: '#7c3aff',
          lime: '#caff33',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
