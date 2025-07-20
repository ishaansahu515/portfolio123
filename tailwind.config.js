/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lavender': {
          50: '#faf9ff',
          100: '#f3f1ff',
          200: '#e9e5ff',
          300: '#d9d1ff',
          400: '#c4b2ff',
          500: '#ac8eff',
          600: '#9568ff',
          700: '#8347ea',
          800: '#6d3bc6',
          900: '#5a32a3',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};