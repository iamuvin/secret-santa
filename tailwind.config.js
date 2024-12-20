/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient-shift': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'aurora': 'aurora 10s ease infinite',
        'spin-slow': 'spin 3s linear infinite',
        'sparkle': 'sparkle 1s ease-in-out infinite',
        'snowfall': 'snowfall 10s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        aurora: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 0.8 },
        },
        sparkle: {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: 0 },
          '50%': { transform: 'scale(1) rotate(180deg)', opacity: 1 },
          '100%': { transform: 'scale(0) rotate(360deg)', opacity: 0 },
        },
        snowfall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: 0 },
          '10%': { opacity: 1 },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};