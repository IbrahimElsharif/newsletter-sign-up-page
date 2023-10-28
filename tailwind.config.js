/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        sm: {"min": "320px", "max": "425px"},
        md: {"min": "426px", "max": "1024px"}
      },
      colors: {
        darkSlateGrey: "hsl(234, 29%, 20%)",
        charcoalGrey: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        "red-150" : "rgb(254, 214, 214)"
      },
      width: {
        "88": "22rem"
      }
    },
  },
  plugins: [],
}

