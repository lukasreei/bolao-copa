import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sofia: {
          green: '#0F6B3D',
          'green-dark': '#064D2A',
          gold: '#D9A441',
          cream: '#FFF9E9',
        },
      },
      boxShadow: {
        soft: '0 16px 50px rgba(6, 77, 42, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config;
