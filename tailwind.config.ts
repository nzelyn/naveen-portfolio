import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#050816',
          navy: '#0B1120',
          card: '#0D1428',
          blue: '#00D9FF',
          cyan: '#00FFFF',
          purple: '#7C3AED',
          'purple-light': '#9F67FF',
          green: '#00FF88',
          red: '#FF0055',
          amber: '#FFB800',
        },
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
        rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-reverse': 'spin-reverse 15s linear infinite',
        'spin-slow-reverse': 'spin-reverse 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'scan': 'scan-line 3s linear infinite',
        'glitch': 'glitch 8s infinite',
        'data-stream': 'data-stream 3s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'slide-in-right': 'slide-in-right 0.8s ease-out',
        'fade-up': 'fade-up 0.8s ease-out',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.4), 0 0 40px rgba(0, 217, 255, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.8), 0 0 80px rgba(0, 217, 255, 0.3), 0 0 120px rgba(0, 217, 255, 0.1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'scan-line': {
          '0%': { top: '-5%' },
          '100%': { top: '105%' },
        },
        'glitch': {
          '0%, 85%, 100%': { transform: 'translate(0)', filter: 'none' },
          '86%': { transform: 'translate(-3px, 1px)', filter: 'hue-rotate(90deg)' },
          '87%': { transform: 'translate(3px, -1px)', filter: 'hue-rotate(180deg)' },
          '88%': { transform: 'translate(-1px, 3px)', filter: 'none' },
          '89%': { transform: 'translate(2px, -2px)' },
          '90%': { transform: 'translate(-2px, 1px)' },
        },
        'data-stream': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-60px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(60px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.2)',
        'glow-purple': '0 0 20px rgba(124, 58, 237, 0.5), 0 0 40px rgba(124, 58, 237, 0.2)',
        'glow-cyan': '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.2)',
        'glow-sm': '0 0 10px rgba(0, 217, 255, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(0, 217, 255, 0.1)',
      },
    },
  },
  plugins: [],
}

export default config
