/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for debugging
        background: {
          light: "#F8FAFC", // Light mode background
          dark: "#1E293B",  // Dark mode background
        },
        text: {
          light: "#0F172A", // Light mode text
          dark: "#F1F5F9",  // Dark mode text
        },
      },
    },
  },
  plugins: [],
};
