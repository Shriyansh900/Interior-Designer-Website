/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6fff7',
          100: '#ccffef',
          200: '#99ffdf',
          300: '#66ffcf',
          400: '#33ffbf',
          500: '#1dcd9f',
          600: '#169976',
          700: '#0f664e',
          800: '#083327',
          900: '#041913',
          950: '#020c09',
        },
        accent: {
          50: '#e6fff7',
          100: '#ccffef',
          200: '#99ffdf',
          300: '#66ffcf',
          400: '#33ffbf',
          500: '#1dcd9f',
          600: '#169976',
          700: '#0f664e',
          800: '#083327',
          900: '#041913',
          950: '#020c09',
        },
        neutral: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#222222',
          900: '#000000',
          950: '#000000',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}