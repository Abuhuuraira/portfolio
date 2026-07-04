/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          DEFAULT: '#00d4ff',
          50: '#e6fffe',
          100: '#b3fff9',
          200: '#80fff5',
          300: '#4dffed',
          400: '#1afff5',
          500: '#00d4ff',
          600: '#00aed6',
          700: '#0088ad',
          800: '#006385',
          900: '#003d5c',
        },
        neon: {
          DEFAULT: '#a855f7',
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6d28d9',
          900: '#4c1d95',
        },
        space: {
          950: '#080812',
          900: '#0d0d1a',
          800: '#111127',
          700: '#181830',
          600: '#1e1e38',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'gradient-x': 'gradient-x 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'border-spin': 'border-spin 4s linear infinite',
        'scan-line': 'scan-line 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 8px #00d4ff, 0 0 20px #00d4ff' },
          '100%': { textShadow: '0 0 8px #a855f7, 0 0 20px #a855f7, 0 0 40px #a855f7' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff' },
          '50%': { boxShadow: '0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 60px #00d4ff' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'border-spin': {
          '100%': { transform: 'rotate(360deg)' },
        },
        'scan-line': {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(100%)' },
        },
      },
      backgroundSize: {
        '200%': '200% auto',
        '400%': '400% 400%',
      },
      boxShadow: {
        cyber: '0 0 20px rgba(0,212,255,0.3), 0 0 40px rgba(0,212,255,0.1)',
        'cyber-lg': '0 0 40px rgba(0,212,255,0.5), 0 0 80px rgba(0,212,255,0.2)',
        neon: '0 0 20px rgba(168,85,247,0.3), 0 0 40px rgba(168,85,247,0.1)',
        'neon-lg': '0 0 40px rgba(168,85,247,0.5), 0 0 80px rgba(168,85,247,0.2)',
        glass: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'inner-glow': 'inset 0 0 30px rgba(0,212,255,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
