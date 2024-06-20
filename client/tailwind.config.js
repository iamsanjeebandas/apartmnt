/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "0d3b66": "#0d3b66",
        "f4d35e": "#f4d35e",
      },
    },
  },
  plugins: [],
};
