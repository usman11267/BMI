/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'underweight': '#60A5FA',
        'normal': '#34D399',
        'overweight': '#FBBF24',
        'obese': '#F87171',
        'primary': {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        'secondary': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'accent': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        }
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'rainbow': 'rainbow 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        rainbow: {
          '0%': { borderColor: '#ff0000' },
          '16.66%': { borderColor: '#ff8000' },
          '33.33%': { borderColor: '#ffff00' },
          '50%': { borderColor: '#00ff00' },
          '66.66%': { borderColor: '#0080ff' },
          '83.33%': { borderColor: '#8000ff' },
          '100%': { borderColor: '#ff0000' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(236, 72, 153, 0.8)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-rainbow': 'linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #00ff00, #0080ff, #8000ff)',
        'gradient-sunset': 'linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #0abde3)',
        'gradient-ocean': 'linear-gradient(135deg, #667eea, #764ba2, #4facfe, #00f2fe)',
        'gradient-aurora': 'linear-gradient(135deg, #a8edea, #fed6e3, #fad0c4, #ffd1ff)',
        'gradient-cosmic': 'linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c)',
        'gradient-vibrant': 'linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)'
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 20px rgba(236, 72, 153, 0.5)',
        'glow-lg': '0 0 40px rgba(236, 72, 153, 0.6)',
        'glow-xl': '0 0 60px rgba(236, 72, 153, 0.7)'
      }
    },
  },
  plugins: [],
} 