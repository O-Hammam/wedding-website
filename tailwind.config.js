/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        english: ["Charm", "serif"],
        englishSubTitle: ["Great Vibes", "serif"],
        englishTitle: ["Gwendolyn", "serif"],
        arabic: ["Aref Ruqaa", "serif"],
        arabicTitle: ["Aref Ruqaa", "serif"],
        arabicAmiri: ["Amiri", "serif"],
      },
      colors: {
        gold: {
          light: "#efece4",
          DEFAULT: "#D4AF37",
          dark: "#B4941F",
        },
        sage: {
          light: "#f5f2f5",
          DEFAULT: "#9CAF88",
          dark: "#DED8BB",
        },
        jetText: {
          DEFAULT: "#2C2C2C",
        },
      },
    },
  },
  plugins: [],
};
