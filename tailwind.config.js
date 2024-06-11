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
        'navbar-bg': '#DFCFB9',
        'text-primary': '#673F3D',
        'bg-alt': '#F7F1E7',
        'bg-alt2': '#F1EADF'
      }
    },
  },
  plugins: [],
};
