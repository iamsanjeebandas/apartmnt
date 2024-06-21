/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": {
          DEFAULT: "#165AA1", // Main color
          "light": "#467EB9", // Lighter shade
          "dark": "#2B4E73", // Darker shade
        },
        f4d35e: "#f4d35e",
      },
    },
  },
  plugins: [],
};
