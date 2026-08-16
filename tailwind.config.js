/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5a4bda',
          50: '#f1efff',
          100: '#d2ccff',
          200: '#b2a9ff',
          300: '#9387ff',
          400: '#7363fc',
          600: '#4437b8',
          700: '#312596',
          800: '#211774',
          900: '#140d52',
        },
        secondary: {
          DEFAULT: '#e31b4d',
          50: '#fce8ed',
          100: '#f18da6',
          200: '#ef7694',
          300: '#ec5f83',
          400: '#e94971',
          600: '#cd1846',
          700: '#b6163e',
          800: '#a01336',
          900: '#5b0b1f',
        },
        deepBlue: '#140D52',
      },
      fontFamily: {
        sans: ['RedditSans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
