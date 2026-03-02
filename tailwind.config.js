/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8f0f7',
          100: '#c5d8eb',
          200: '#9ebfdd',
          300: '#77a5cf',
          400: '#5991c5',
          500: '#3b7ebb',
          600: '#2d6aaa',
          700: '#1f5594',
          800: '#134077',
          900: '#0B3C5D',
          950: '#072538',
        },
        teal: {
          400: '#2dd4bf',
          500: '#00C9A7',
          600: '#00a98d',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'ripple': 'ripple 4s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'counter': 'counter 2s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bubble': 'bubble 8s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-1.5rem)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-3rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(3rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00C9A7, 0 0 10px #00C9A7' },
          '100%': { boxShadow: '0 0 20px #00C9A7, 0 0 40px #00C9A7, 0 0 60px #00C9A750' },
        },
        bubble: {
          '0%': { transform: 'translateY(100%) scale(0)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(-100vh) scale(1.5)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #072538 0%, #0B3C5D 50%, #1a5276 100%)',
        'card-gradient': 'linear-gradient(135deg, #0B3C5D, #1a5276)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}
