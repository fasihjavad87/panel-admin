/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // مسیر فایل‌های HTML و JS در پوشه src
  ],
  theme: {
    extend: {
      borderRadius:{
        "normal": "0.25rem",
      },
      screens: {
        'xs': '360px',
      },
      fontFamily: {
        "IRSans-Black": "IRSans-Black",
        "IRSans-Bold": "IRSans-Bold",
        "IRSans-DemiBold": "IRSans-DemiBold",
        "IRSans-ExtraBold": "IRSans-ExtraBold",
        "IRSans-Light": "IRSans-Light",
        "IRSans-Medium": "IRSans-Medium",
        "IRSans-Regular": "IRSans-Regular",
        "IRSans-Thin": "IRSans-Thin",
        "IRSans-UltraLight": "IRSans-UltraLight",
      },
      colors :{
        "public" : "#5867dd",
      },
      padding:{
        "18": "18px",
      },
      fontSize:{
        "17":"17px",
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },

  ],
}
