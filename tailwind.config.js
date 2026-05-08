/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orchid: {
          50: "#fff7ed",
          100: "#ffedd5",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
        ink: "#18212f",
        leaf: "#1f7a5b",
        skydeep: "#235789",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(24, 33, 47, 0.12)",
      },
    },
  },
  plugins: [],
};
