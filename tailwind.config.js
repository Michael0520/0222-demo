// const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue,html}",
    "./partials/*.{html,ejs}",
    "./partials/**/*.{html,ejs}",
  ],
  theme: {
    backgroundImage: {
      "home-banner": "url('/images/home/home_banner.png')",
      "form-banner": "url('/images/form_banner.png')",
    },
    colors: {
      bg: {
        white: "#FFFFFF",
        black: "#1E1E1E",
        DEFAULT: "#ED2227",
        medium: "#950101",
        dark: "#3D0000",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
