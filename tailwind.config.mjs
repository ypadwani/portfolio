/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darktheme: '#11001F',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
        'hover': '6px 6px 0 #000',
        'hover-dark': '6px 6px 0 #fff'
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(150px, 1fr))',
        'cards': 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))',
        'gallery': 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
        'sidebar': 'minmax(250px, 1fr) 4fr'
      },
      spacing: {
        'fluid-1': 'clamp(0.5rem, 1vw, 1rem)',
        'fluid-2': 'clamp(1rem, 2vw, 2rem)',
        'fluid-3': 'clamp(1.5rem, 3vw, 3rem)',
      },
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      }
    },
  },
  
  darkMode: 'selector',
  plugins: [],
};
