/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF4D6D',
        background: '#FFF8F9',
        foreground: '#333333',
        'muted-foreground': '#666666',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(6px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'fade-in': 'fadeIn 1.2s ease forwards',
      },
    },
  },
  plugins: [],
};
