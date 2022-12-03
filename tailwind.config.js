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
          primary: "#0a1930",
          secondary: "#1f93ff",
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
