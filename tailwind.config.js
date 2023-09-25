/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xl: "1010px",
      },
      colors: {
        background: "#f3f2ef",
        nodeflair: {
          green: "#1fc76a",
          brightGreen: "#28a745",
          bgGreen: "#ddf7e9",
          grey: "#dfdfdf",
          lightGrey: "#838383",
          lighestGrey: "#f1f1f1",
        },
        black: "#3a3a3a",
      },
      boxShadow: {
        custom: "0px 0px 2px rgba(0,0,0,0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
