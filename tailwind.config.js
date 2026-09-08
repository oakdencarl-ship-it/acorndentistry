/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3f4',
          100: '#ebe6e8',
          200: '#d8cdd2',
          300: '#c0aab3',
          400: '#a68794',
          500: '#725067',
          600: '#5d4053',
          700: '#4a3342',
          800: '#3d2b37',
          900: '#34252f',
        },
        accent: {
          50: '#faf9f8',
          100: '#f4f1ef',
          200: '#e8d2c1',
          300: '#dcc3b0',
          400: '#d0b49f',
          500: '#c4a58e',
          600: '#b8967d',
          700: '#ac876c',
          800: '#a0785b',
          900: '#94694a',
        },
        purple: {
          50: '#f6f8f6',
          100: '#edf1ed',
          200: '#dbe3db',
          300: '#c9d5c9',
          400: '#b7c7b7',
          500: '#678572',
          600: '#5a7562',
          700: '#4d6552',
          800: '#405542',
          900: '#334532',
        }
      }
    },
  },
  plugins: [],
}