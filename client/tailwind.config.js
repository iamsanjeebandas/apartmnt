/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": {
          DEFAULT: "#E94F37", // Main color
          light: "#F8725D", // Lighter shade
          dark: "#C1412D", // Darker shade
        },
        f6f7eb: "#f6f7eb",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as the default sans-serif font
      },
    },
  },
  plugins: [],
};
