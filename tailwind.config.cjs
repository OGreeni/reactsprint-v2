/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "fill-96": "repeat(auto-fill, 24rem)",
      },
    },
  },
  daisyui: {
    themes: ["winter"],
  },
  plugins: [require("prettier-plugin-tailwindcss"), require("daisyui")],
};
