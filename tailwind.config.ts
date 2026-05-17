import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAF7F2',
        surface: '#F0EBE1',
        bordo: '#7B2D3E',
        'bordo-light': '#F2E8EB',
        oliva: '#7A7A52',
        'cafe-texto': '#2E1F14',
        muted: '#9E8E80',
        linea: '#E2D9CF',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        jost: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        'bounce-arrow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 3s ease-out infinite',
        'bounce-arrow': 'bounce-arrow 2s ease-in-out infinite',
        'fade-in': 'fade-in 280ms ease forwards',
        'slide-in': 'slide-in 250ms ease forwards',
      },
    },
  },
  plugins: [],
}
export default config
