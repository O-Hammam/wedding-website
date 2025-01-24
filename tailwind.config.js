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
          light: "#F8EED1",
          // light: "#F5E6BE",
          DEFAULT: "#D4AF37",
          dark: "#B4941F",
        },
        sage: {
          light: "#F8F8F4",
          // light: "#E0E9C9",
          DEFAULT: "#9CAF88",
          // dark: "#363E2E",
          dark: "#E7E1C5",
        },
        jetText: {
          DEFAULT: "#2C2C2C",
        },
        edge: {
          DEFAULT: "#F8EED1",
        },
      },
    },
  },
  plugins: [],
};
