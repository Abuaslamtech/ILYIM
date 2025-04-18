/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', "sans-serif"],
      },
      colors: {
        blush: "#FF6B81",
        orchid: "#B267A6",
        peach: "#FFF0EB",
        charcoal: "#2C2C2C",
        grayish: "#6E6E6E",
        babyblue: "#AEE2FF",
        mint: "#CFFFE5",
        mellow: "#FFEAA7",
      },
    },
  },
  plugins: [],
};
