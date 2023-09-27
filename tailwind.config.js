/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      'inter': ["inter"],
    },
    extend: {
      colors: {
        widget_primary_white: "var(--color-widget-background-white)",
        widget_primary_black: "var(--color-widget-background-black)",
        font_primary_black: "var(--color-font-color-black)",
        font_primary_white: "var(--color-font-color-white)",
        font_primary_gray: "var(--color-font-color-gray)",
        font_primary_subtle: "var(--color-font-color-subtle)",
        button_primary_black: "var(--color-button-primary-black)",
        button_primary_black_pressed:
          "var(--color-button-primary-black-pressed)",
        button_primary_orange: "var(--color-button-primary-orange)",
        button_primary_orange_pressed:
          "var(--color-button-primary-orange-pressed)",
      },
    },
  },
  plugins: [],
};
