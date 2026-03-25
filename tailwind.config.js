/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        verdant: {
          50: '#f3f6f2',
          100: '#e3ece3',
          200: '#c9d8cb',
          300: '#a3bda8',
          400: '#7d9f85',
          500: '#5a7f67',
          600: '#41624d',
          700: '#2d4636',
          800: '#1b2d23',
          900: '#111d16',
          950: '#0a120d',
        },
        gold: {
          50: '#fff8e8',
          100: '#fcebc5',
          200: '#f5d594',
          300: '#ebbe69',
          400: '#e1aa4b',
          500: '#c8933c',
          600: '#a17330',
          700: '#785325',
          800: '#4f3618',
          900: '#2a1c0b',
        },
        rosso: '#b44838',
        porcelain: '#f7f3ed',
        slate: '#5a635d',
        charcoal: '#0e1c16',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Sora', 'Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      boxShadow: {
        glow: '0 25px 60px -25px rgba(14, 28, 22, 0.8)',
      },
      backgroundImage: {
        'noise-soft': "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(0,0,0,0.05))",
        'radial-spot': 'radial-gradient(circle at 20% 20%, rgba(200,147,60,0.25), transparent 50%)',
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease forwards',
        marquee: 'marquee 18s linear infinite',
        'marquee-slow': 'marquee 28s linear infinite',
        'drift-rotate': 'drift 24s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

