/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'black-gradient': 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
        'blue-gradient': 'linear-gradient(to bottom, #000000, #101B38)',
        'blue-black-gradient': 'linear-gradient(to bottom, #101B38, #000000)',
        'card-gradient': 'linear-gradient(to bottom,#000000 ,#000428)',
        'black-hole-gradient': 'radial-gradient(circle at 80% center , #000000 0%, #101B38 15%)',
      },
      colors: {
        'metal-gray': '#B5B6BA',
      },
    },
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    }
  },
  plugins: [],
}

