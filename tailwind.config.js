/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        raytheme: {
          primary: "#006778",
          secondary: "#00AFC1",
          accent: "#2da5ff",
          neutral: "#333",
          "base-100": "#ffffff",
        },
      },
      
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
