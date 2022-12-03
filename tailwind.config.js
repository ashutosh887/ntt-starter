/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*", "./src/components/*"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [],
};
