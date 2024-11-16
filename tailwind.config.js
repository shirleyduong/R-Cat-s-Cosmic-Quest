/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cats:{
          "purple-100": "#1D0933",
          "purple-200": "#27178E",
          "purple-300": "#7023C3",
        },
      },
    },
  },
  plugins: [],
};
