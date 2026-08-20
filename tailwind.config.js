/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#4A126D',
          purpleDark: '#3A0CA3',
          magenta: '#7B1FA2',
          pink: '#E91E63',
          crimson: '#C2185B',
          lavender: '#F6F0FA',
          softPink: '#FFF0F5',
        },
        cream: {
          DEFAULT: '#FFFFFF',
          50: '#FFFFFF',
          100: '#FDFBF7',
          200: '#F6F0FA',
          300: '#EBDDCF',
        },
        plum: {
          light: '#8C5A67',
          DEFAULT: '#4A126D',
          dark: '#3A0CA3',
        },
        rose: {
          light: '#FCE4EC',
          DEFAULT: '#E91E63',
          hover: '#D81B60',
          dark: '#C2185B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(123, 31, 162, 0.08)',
        'soft-hover': '0 10px 30px -4px rgba(123, 31, 162, 0.18)',
        'editorial': '0 20px 40px -10px rgba(74, 18, 109, 0.15)',
        'magenta-glow': '0 10px 25px -5px rgba(233, 30, 99, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'float': 'floatSlow 5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
