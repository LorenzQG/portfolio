/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      "colors": {
        "primaryBG": "#0D0D0D",
        "secondaryBG":  "#2C2C2C",
        "primaryText": "#EAEAEA",
        "secondaryText": "#8A8A8A",
        "destaque": "#00BFAE"
      },
      "dropShadow":{
        "img": "0 25px 25px rgba(0, 191, 174, 0.6)",
        "text": "0 10px 10px rgba(0, 191, 174, 0.6)",
      },
      "gridTemplateColumns": {
        "auto": "repeat (autofit, minmax(3rem , 1fr))"
      },
    },
  },
  plugins: [],
}

