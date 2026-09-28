/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        veltrion: {
          DEFAULT: '#223023',
          dark: '#182319',
          light: '#2e402f',
          accent: '#223023',
          glow: 'rgba(34, 48, 35, 0.4)',
        },
        darkbg: '#070b08',
        darkcard: '#0e1610',
        darkborder: '#1a281d',
        lightbg: '#f8faf8',
        lightcard: '#ffffff',
        lightborder: '#e2e8f0',
      },
      fontFamily: {
        krona: ['"Krona One"', 'sans-serif'],
        cinzel: ['"Cinzel"', 'serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'veltrion-glow': '0 0 25px rgba(34, 48, 35, 0.35)',
        'veltrion-card': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
