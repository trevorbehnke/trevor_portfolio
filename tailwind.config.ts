import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0FDFA',
          200: '#99F6E4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          900: '#134E4A',
        },
      },
      borderRadius: {
        md: '10px',
        lg: '12px',
      },
      boxShadow: {
        card: '0 2px 10px rgba(0,0,0,0.08)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '1.5rem',
        },
        screens: {
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [],
} satisfies Config

