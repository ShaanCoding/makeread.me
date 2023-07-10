/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',

  ],
  theme: {
    extend: {
      colors: {
        primary: "#191919",
        secondary: "#F4F4F4",
      },
      fontFamily:{
        poppins:["var(--font-poppins)"],
        
        
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      letterSpacing:{
        primary:"-0.005rem",
        secondary:"-0.13px"
      }
    },
  },
  plugins: [],
}
