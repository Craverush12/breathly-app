/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "breathly-serif-medium": ["Lora-Medium"],
        "breathly-serif-semibold": ["Lora-SemiBold"],
        "breathly-regular": ["GeneralSans-Regular"],
        "breathly-medium": ["GeneralSans-Medium"],
        "breathly-mono": ["HelveticaNeue-Light"],
      },
    },
  },
  plugins: [],
};
