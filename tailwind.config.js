import tailwindcssMotion from "tailwindcss-motion";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-sans)"], mono: ["var(--font-mono)"] },
    },
  },
  darkMode: "class",
  plugins: [tailwindcssMotion],
};

module.exports = config;
