/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '450px',
        sm: '490px',
        md: '690px',
        lg: '895px',
        xl: '1105px',
        '2xl': '1310px',
      },
    },
  },
  plugins: [],
}