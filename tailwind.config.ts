/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F172A", // Dark Blue
          light: "#1E293B",
          dark: "#0B1120",
        },
        secondary: {
          DEFAULT: "#1E3A8A", // Bright Blue
          light: "#3B82F6",
          dark: "#1E40AF",
        },
        background: "#F1F5F9", // Light Grayish
        accent: {
          DEFAULT: "#DC2626", // Bold Red
          light: "#EF4444",
          dark: "#B91C1C",
        },
      },
    },
  },
  plugins: [],
};
