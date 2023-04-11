/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/spice2.jpeg')",
      },
      fontFamily: {
        thefont: ["Alice", "serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  important: true,
}
