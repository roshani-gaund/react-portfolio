/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6d5efc",
          50: "#f4f3ff",
          100: "#e7e5ff",
          200: "#cbc7ff",
          300: "#aea8ff",
          400: "#928aff",
          500: "#766cff",
          600: "#6d5efc",
          700: "#5a4ae0",
          800: "#493bb5",
          900: "#392f8c"
        }
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
}
