/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        background: 'white',
        backgroundSecondary: "#f2f4e9",
        foreground: '#171717',

        btn: {
          background: '#00531b',
          'background-hover': '#027c2a',
        },
      },
    },
  },
  plugins: [],
}
