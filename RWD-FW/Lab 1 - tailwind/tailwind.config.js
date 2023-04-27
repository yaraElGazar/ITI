/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        128: "26rem",
        200: "30rem",
      },
      width: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
