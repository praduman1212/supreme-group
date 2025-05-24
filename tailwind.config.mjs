/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeInScale: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.8) translateX(50px)'
          },
          '50%': {
            opacity: '0.5',
            transform: 'scale(1.1) translateX(-10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1) translateX(0)'
          },
        }
      },
      animation: {
        fadeInScale: 'fadeInScale 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards'
      }
    },
  },
  plugins: [],
};
