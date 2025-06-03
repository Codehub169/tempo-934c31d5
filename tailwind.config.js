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
        'fade-in-up': 'fadeInUp 1s ease-in forwards',
        // Note: 'animate-bounce' used by ScrollIndicator is a default Tailwind animation.
        // 'logo-reveal' and 'scroll-indicate' animations were removed as components now use inline transitions or default Tailwind animations.
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
};