/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // If you create a top-level components folder
  ],
  theme: {
    extend: {
      colors: {
        'hueneu-primary': '#A0A0A0',       // Warm, muted gray ("Neu")
        'hueneu-secondary': '#E0D9D0',    // Soft, warm beige/off-white ("Neu")
        'hueneu-accent': '#FF6B6B',        // Vibrant coral/red ("Hue")
        'hueneu-white': '#FFFFFF',
        'hueneu-light-gray': '#F5F5F5',
        'hueneu-dark-gray': '#333333',     // For text
        'hueneu-success': '#4CAF50',
        'hueneu-warning': '#FFC107',
        'hueneu-error': '#F44336',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'logo-reveal': 'logoReveal 2s ease-out forwards', // Example, actual animation to be defined in CSS
        'scroll-indicate': 'scrollIndicate 1.5s infinite ease-in-out' // Example for scroll indicator
      },
      keyframes: {
        logoReveal: {
          // Example keyframes, to be customized
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollIndicate: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        }
      }
    },
  },
  plugins: [],
};