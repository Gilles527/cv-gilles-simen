/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0A0A14',
        plasma: '#7B61FF',
        ghost: '#F0EFF4',
        graphite: '#18181B',
        neon: {
          blue: '#38bdf8',
          purple: '#a855f7',
          violet: '#7B61FF',
        }
      },
      fontFamily: {
        title: ['"Sora"', 'sans-serif'],
        dramatic: ['"Instrument Serif"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem',
      },
      boxShadow: {
        'neon-glow': '0 0 25px -5px rgba(123, 97, 255, 0.45)',
        'neon-strong': '0 0 40px -5px rgba(123, 97, 255, 0.65)',
      }
    },
  },
  plugins: [],
}
