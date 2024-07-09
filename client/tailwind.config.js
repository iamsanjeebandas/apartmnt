/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": {
          DEFAULT: "#222d52", // Main color
          light: "#e8e4e0", // Lighter shade
          dark: "#C1412D", // Darker shade
        },
        f6f7eb: "#f6f7eb",
        d2b68a: "#d2b68a",
        fdffff: "#fdffff",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as the default sans-serif font
      },
    },
  },
  plugins: [],
};
