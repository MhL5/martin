import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ["Vazirmatn", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};