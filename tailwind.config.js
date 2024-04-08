/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile':{'min':'2px' },
      'lgMobile':{'min':'376px' },
      'sm': {'min': '640px' },
      'md': {'min': '768px' },
      'lg': {'min': '1024px' },
      'xl': {'min': '1280px' },
      'ml': {'min':'1762px'},

    },
    extend: {},
  },
  plugins: [],
}