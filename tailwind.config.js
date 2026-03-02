/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'bebas': ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        gold: '#d4af37',
        'gold-light': '#f1d77a',
        'dark-purple': '#1a0b2e',
        'darker-purple': '#0f0520',
        'deep-dark': '#0a0014',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'rotate-reel': 'rotateReel 20s linear infinite',
        'badge-pulse': 'badgePulse 3s ease-in-out infinite',
        'film-scroll': 'filmScroll 40s linear infinite',
        'reel-spin': 'reelSpin 4s linear infinite',
        'neon-flicker': 'neonFlicker 3s ease-in-out infinite',
        'shine-move': 'shineMove 6s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'bg-shift': 'bgShift 10s ease-in-out infinite',
        'bg-pulse': 'bgPulse 6s ease-in-out infinite',
        'trophy-reveal': 'trophyReveal 3s ease-out forwards',
        'title-glow': 'titleGlow 2s ease-in-out infinite',
        'spotlight-sweep': 'spotlightSweep 8s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'ticker': 'tickerScroll 15s linear infinite',
        'seat-float': 'seatFloat 3s ease-in-out infinite',
        'icon-float': 'iconFloat 3s ease-in-out infinite',
        'fade-in-out': 'fadeInOut 2s ease-in-out infinite',
        'film-roll': 'filmRoll 2s linear infinite',
      },
      keyframes: {
        glow: {
          'from': { filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.4))' },
          'to': { filter: 'drop-shadow(0 0 40px rgba(212,175,55,0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '50%': { transform: 'translateY(-100vh) translateX(50px)', opacity: '1' },
        },
        rotateReel: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        badgePulse: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 40px rgba(212,175,55,0.4)' },
          '50%': { transform: 'scale(1.1)', boxShadow: '0 0 60px rgba(212,175,55,0.6)' },
        },
        filmScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        reelSpin: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        neonFlicker: {
          '0%, 100%': { textShadow: '0 0 10px rgba(212,175,55,0.5), 0 0 20px rgba(212,175,55,0.3)' },
          '50%': { textShadow: '0 0 20px rgba(212,175,55,0.8), 0 0 40px rgba(212,175,55,0.6), 0 0 60px rgba(212,175,55,0.4)' },
        },
        shineMove: {
          '0%': { transform: 'translateX(-100%) rotate(25deg)' },
          '100%': { transform: 'translateX(100%) rotate(25deg)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        bgShift: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        bgPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        trophyReveal: {
          '0%': { clipPath: 'inset(100% 0 0 0)', transform: 'translateY(50px) scale(0.8)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { clipPath: 'inset(0 0 0 0)', transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        titleGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.5))' },
          '50%': { filter: 'drop-shadow(0 0 40px rgba(212,175,55,0.9))' },
        },
        spotlightSweep: {
          '0%, 100%': { transform: 'translateX(0) rotate(-5deg)', opacity: '0.3' },
          '50%': { transform: 'translateX(100px) rotate(5deg)', opacity: '0.6' },
        },
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(40px, 40px)' },
        },
        tickerScroll: {
          '0%': { transform: 'translateX(-10px)' },
          '100%': { transform: 'translateX(10px)' },
        },
        seatFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        iconFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(5deg)' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        filmRoll: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '20px 0' },
        },
      },
    },
  },
  plugins: [],
}
