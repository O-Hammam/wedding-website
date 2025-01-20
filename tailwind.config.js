/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        english: ["Charm", "serif"],
        englishTitle: ["Great Vibes", "serif"],
        arabic: ["Aref Ruqaa", "serif"],
        arabicTitle: ["Aref Ruqaa", "serif"],
        arabicAmiri: ["Amiri", "serif"],
      },
      colors: {
        gold: {
          light: "#F5E6BE",
          DEFAULT: "#D4AF37",
          dark: "#B4941F",
        },
        sage: {
          light: "#E1E5D6",
          DEFAULT: "#9CAF88",
          dark: "#708060",
        },
      },
    },
  },
  plugins: [],
};
