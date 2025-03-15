/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
