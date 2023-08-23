/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        "main-bg": "#1B2330",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
