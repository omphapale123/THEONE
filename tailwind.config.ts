import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F4F6F',      // Steel Blue
        secondary: '#1B1B1B',    // Soft Black
        accent: '#B4C5D0',       // Sky Silver
        background: '#F5F7FA',   // Pearl White
        textDark: '#2C2C2C',     // Dark Gray
        golden: '#e4a513',       // Golden color
        textLight: '#6B7280',    // Light gray for text
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
        'pacifico': ['Pacifico', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shipMove1: {
          '0%': { transform: 'translateX(-100vw) translateY(0)' },
          '50%': { transform: 'translateX(50vw) translateY(-20px)' },
          '100%': { transform: 'translateX(200vw) translateY(0)' },
        },
        shipMove2: {
          '0%': { transform: 'translateX(100vw) translateY(0) scaleX(-1)' },
          '50%': { transform: 'translateX(-50vw) translateY(20px) scaleX(-1)' },
          '100%': { transform: 'translateX(-200vw) translateY(0) scaleX(-1)' },
        },
        shipMove3: {
          '0%': { transform: 'translateX(-100vw) translateY(0)' },
          '100%': { transform: 'translateX(200vw) translateY(-30px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config