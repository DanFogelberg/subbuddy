/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        font_primary_black: 'var(--color-font-color-black)',
        font_primary_white: 'var(--color-font-color-white)',
        button_primary_black: 'var(--color-button-primary-black)',
        button_primary_black_pressed: 'var(--color-button-primary-black-pressed)',
        button_primary_orange: 'var(--color-button-primary-orange)',
        button_primary_orange_pressed: 'var(--color-button-primary-orange-pressed)',
      },
    },
  },
  plugins: [],
}

