/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        typing: 'blink 1s steps(2, start) infinite'
      },
      keyframes: {
        blink: {
          to: { visibility: 'hidden' }
        }
      }
    }
  },
  plugins: []
};
