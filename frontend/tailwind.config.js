/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#05010d',      // Deep Cosmic Void
                    'dark-light': '#0a0215', // Slightly lighter dark
                    plum: '#2d0f36',      // Deep Mystical Purple
                    'plum-light': '#3d1f46', // Lighter plum
                    gold: '#e0c097',      // Champagne Stardust
                    'gold-light': '#f4e4c1', // Light gold
                    'gold-dark': '#c9a962',  // Dark gold
                    text: '#f2f0f5',      // Starlight White
                    'text-muted': '#a8a4b0', // Muted text
                },
                accent: {
                    purple: '#8b5cf6',
                    pink: '#ec4899',
                    cyan: '#06b6d4',
                    emerald: '#10b981',
                }
            },
            fontFamily: {
                sans: ['Outfit', 'Inter', 'sans-serif'],
                serif: ['Cormorant Garamond', 'serif'],
                mono: ['ui-monospace', 'monospace'],
            },
            fontSize: {
                'display-xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
                'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '100': '25rem',
                '112': '28rem',
                '128': '32rem',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            boxShadow: {
                'glow': '0 0 40px rgba(224, 192, 151, 0.4)',
                'glow-lg': '0 0 60px rgba(224, 192, 151, 0.6)',
                'glow-sm': '0 0 20px rgba(224, 192, 151, 0.3)',
                'dark': '0 20px 60px -15px rgba(0, 0, 0, 0.8)',
                'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                'inner-glow': 'inset 0 0 20px rgba(224, 192, 151, 0.2)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-in-right': 'slideInRight 0.5s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'gradient': 'gradient 8s ease infinite',
                'spin-slow': 'spin 20s linear infinite',
                'bounce-slow': 'bounce 3s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
                gradient: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
            backdropBlur: {
                'xs': '2px',
                'premium': '20px',
            },
            transitionDuration: {
                '400': '400ms',
                '600': '600ms',
                '800': '800ms',
            },
        },
    },
    plugins: [],
}
