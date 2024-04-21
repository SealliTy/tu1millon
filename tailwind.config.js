/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#5193E8",
        secondary: "#CBE851",
        tertiary: "#596069",
      },
      screens: {
        xsm: "320px",
      },
    },
  },
  plugins: [],
};
