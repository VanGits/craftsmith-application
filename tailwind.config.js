/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // we can add the selected font family here
      },
      colors: {
        'black-': '#242424',
        'grayish': '#e6e6e7',
        'Footer-black': "#000000",
        'red': '' //untill we agree on one
      }
    },
  },
  plugins: [],
}
