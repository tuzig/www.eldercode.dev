/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./assets/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'dark-bg': '#0a0a0a',
        'dark-surface': '#111111',
        'dark-border': '#1a1a1a',
        'dark-text': {
          'primary': '#ffffff',
          'secondary': '#b3b3b3',
          'muted': '#666666',
        },
        'cyan': '#00d4ff',
        'purple': {
          '500': '#8b5cf6',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'scale-up': 'scaleUp 0.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'glitch': 'glitch 1s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' },
        },
        glitch: {
          '0%': { textShadow: '0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75)' },
          '15%': { textShadow: '0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75)' },
          '16%': { textShadow: '-0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75)' },
          '49%': { textShadow: '-0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75)' },
          '50%': { textShadow: '0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75)' },
          '99%': { textShadow: '0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75)' },
          '100%': { textShadow: '-0.025em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em -0.05em 0 rgba(0, 0, 255, 0.75)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}