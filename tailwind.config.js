/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F9FAFB',
        primary: '#9A2727',
        dark: '#1A202C',
        light: '#F7FAFC',
      },
    },
  },
  plugins: [],
};
