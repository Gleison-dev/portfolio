/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myrtle_green: "#587B7F",
        erie_black: "#1E2019",
        black_olive: "#394032",
        olivine: "#8DAB7F",
        mindaro: "#CFEE9E"
      }
    },
  },
  plugins: [],
};
