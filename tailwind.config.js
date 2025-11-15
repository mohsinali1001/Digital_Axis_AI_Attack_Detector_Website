/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      keyframes: {
        'flow-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(-50%) scale(1)' },
          '50%': { opacity: '0.4', transform: 'translateY(-50%) scale(1.05)' },
        },
        'flow-shift': {
          '0%, 100%': { opacity: '0.2', transform: 'translate(25%, 25%) scale(1)' },
          '50%': { opacity: '0.25', transform: 'translate(25%, 25%) scale(1.1)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-fast': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'flow-pulse': 'flow-pulse 4s ease-in-out infinite',
        'flow-shift': 'flow-shift 5s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'pulse-fast': 'pulse-fast 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

