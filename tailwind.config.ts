/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#0A2540',
          'primary-light': '#1a3a5f',
          accent: '#D4AF37',
          'accent-dark': '#b8941f',
          'accent-light': '#e5c966',
          teal: '#2C7A7B',
          'teal-light': '#4FD1C5',
          'teal-dark': '#234E52',
          navy: {
            50: '#f0f4f8',
            100: '#d9e2ec',
            200: '#bcccdc',
            300: '#9fb3c8',
            400: '#829ab1',
            500: '#627d98',
            600: '#486581',
            700: '#334e68',
            800: '#243b53',
            900: '#1a2a3a',
            950: '#0f1c2e',
          },
          forest: {
            50: '#f0f7f4',
            100: '#dceee5',
            200: '#b9ddcb',
            300: '#8dc5ab',
            400: '#5fa888',
            500: '#3d8b6d',
            600: '#2d6f56',
            700: '#255a46',
            800: '#1f4838',
            900: '#1a3b2f',
            950: '#0e221b',
          },
          earth: {
            ochre: '#D4A574',
            terracotta: '#C1694F',
            sand: '#E8D5B7',
            clay: '#A0522D',
          }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          display: ['Playfair Display', 'serif'],
        },
        maxWidth: {
          'content': '1400px',
        },
      },
    },
    plugins: [],
  }
