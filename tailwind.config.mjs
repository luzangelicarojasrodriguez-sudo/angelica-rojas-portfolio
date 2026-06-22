/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans:    ['"Inter"',               'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cormorant Garamond"',  'Georgia',   'serif'],
        accent:  ['"Manrope"',             'system-ui', 'sans-serif'],
      },
      colors: {
        /* ── Onyx dark surfaces ────────────────────────── */
        onyx: {
          950: '#0C0A09',
          900: '#1C1917',
          800: '#292524',
          700: '#44403C',
          600: '#57534E',
          500: '#78716C',
          400: '#A8A29E',
          300: '#D6D3D1',
          200: '#E7E5E4',
          100: '#F5F5F4',
          50:  '#FAFAF9',
        },
        /* ── Gold accent ───────────────────────────────── */
        gold: {
          900: '#78350F',
          800: '#92400E',
          700: '#B45309',
          600: '#D97706',
          500: '#F59E0B',
          400: '#FBBF24',
          300: '#FCD34D',
          200: '#FDE68A',
          100: '#FEF3C7',
          50:  '#FFFBEB',
        },
      },
      animation: {
        'fade-in':    'fadeIn 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-up':   'slideUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'shimmer':    'shimmer 2.5s linear infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%':      { opacity: '0.6', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      spacing: {
        '18':  '4.5rem',
        '88':  '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        '5.5xl': ['3.375rem', { lineHeight: '1.1' }],
        '6.5xl': ['4rem',     { lineHeight: '1.05' }],
        '7.5xl': ['5rem',     { lineHeight: '1.0' }],
        '8xl':   ['6rem',     { lineHeight: '1.0' }],
      },
      backdropBlur: {
        '3xl': '40px',
      },
      boxShadow: {
        'gold-sm': '0 1px 8px 0 rgba(217,119,6,0.15)',
        'gold':    '0 4px 24px 0 rgba(217,119,6,0.20)',
        'gold-lg': '0 8px 40px 0 rgba(217,119,6,0.25)',
        'glow':    '0 0 40px 0 rgba(217,119,6,0.12)',
      },
    },
  },
  plugins: [],
};
