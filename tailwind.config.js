/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FDFBF7',
          50: '#FFFFFF',
          100: '#FDFBF7',
          200: '#F5EFE6',
          300: '#EBDDCF',
        },
        blush: {
          DEFAULT: '#F8F2EC',
          soft: '#FDF7F5',
          deep: '#F0DFD5',
        },
        rose: {
          light: '#F9ECE8',
          DEFAULT: '#D98A7D',
          hover: '#C87465',
          dark: '#A65649',
        },
        plum: {
          light: '#8C5A67',
          DEFAULT: '#5C3A42',
          dark: '#3D242B',
        },
        charcoal: {
          DEFAULT: '#2C2424',
          muted: '#635656',
          light: '#9C8E8E',
        },
        sage: {
          light: '#F0F4EF',
          DEFAULT: '#E3E9E0',
          dark: '#587053',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(92, 58, 66, 0.05)',
        'soft-hover': '0 10px 30px -4px rgba(92, 58, 66, 0.1)',
        'editorial': '0 20px 40px -10px rgba(44, 36, 36, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'toast-in': 'toastIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
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
        toastIn: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
