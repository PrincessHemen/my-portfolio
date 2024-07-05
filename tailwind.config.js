module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purpleDark: '#6b21a8',
        purpleLight: '#c084fc',
        blackDark: '#0d0d0d',
        whiteLight: '#f5f5f5',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
    },
  },
  plugins: [],
}
