/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        brand: '#EC213A',
        background: {
          DEFAULT: '#111115',
          dark: '#0D0D0F',
        },
        text: {
          DEFAULT: '#FFFFFF',
          muted: '#E3E3E3',
        },
      },
    },
  },
  plugins: [],
};
