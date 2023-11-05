/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        background: '#111115',
        brandRed: '#EC213A',
      },
    },
  },
  plugins: [],
};
