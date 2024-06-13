/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',

  theme: {
    screens: {
      xs: '475px',
      '1xl': '1400px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        Inter: ["'Inter', sans-serif"],
        jakarta_sans: ["'Plus Jakarta Sans', sans-serif"],
        playfair: ["'Playfair Display', serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#B1E346',
          100: '#F3F8E8',
          200: '#C4F241',
        },
        dark: {
          DEFAULT: '#131410',
          100: '#141410',
          200: '#212220',
          300: '#191A17',
          gradient: '#191917',
        },
        gray: {
          DEFAULT: '#F6F8F1',
          100: '#DCE0D3',
          200: '#D9E0C5',
          50: '#F7F7F7',
          darkGradient: 'rgba(217, 224, 197, .07)',
        },
        borderColor: {
          DEFAULT: '#EDF0E6',
          dark: '#373935',
        },
        paragraph: {
          DEFAULT: '#18181B',
          light: '#5D6167',
        },
        rating: {
          DEFAULT: '#FFC107',
        },
      },
      dropShadow: {
        nav: '0px 0px 30px rgba(0, 0, 0, 0.05)',
        icon: ' 0px 0px 20px 0px rgba(0, 0, 0, 0.07)',
      },
      boxShadow: {
        nav: '0px 0px 30px rgba(0, 0, 0, 0.05)',
        box: ' 0px 5px 50px 0px rgba(0, 0, 0, 0.07)',
      },
      borderRadius: {
        large: '40px',
        medium: '20px',
        DEFAULT: '12px',
      },
      spacing: {
        15: '60px',
        25: '100px',
        150: '150px',
      },
      keyframes: {
        'bounce-open': {
          '0%': { transform: 'scale(0.7)' },
          '45%': { transform: 'scale(1.05)' },
          '80%': {
            transform: 'scale(0.95)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        bounce: 'bounce-open 0.3s',
      },
      backgroundSize: {
        full: '100%',
      },
    },
  },
  safelist: [
    'nav-sticky',
    'active',
    {
      pattern: /scale-/,
    },
  ],
  plugins: [],
}
