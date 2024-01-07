const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    backgroundSize: {
      'size-1': '100% 1px',
      ...defaultTheme.backgroundSize
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens
    },
    extend: {
      keyframes: {
        borderSpin: {
          '100%': {
            transform: 'rotate(360deg)'
          }
        }
      },
      animation: {
        borderSpin: 'spin 3s linear infinite'
      }
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
