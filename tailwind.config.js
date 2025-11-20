/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/**/*.md',
    './*.html',
    './*.md',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4A9EFF',
        'primary-hover': '#7BB8FF',
        dark: {
          bg: '#000000',
          secondary: '#0a0a0a',
        },
        light: {
          bg: '#f5f5f5',
          secondary: '#ffffff',
        }
      },
      fontFamily: {
        mono: ['Courier New', 'Courier', 'Monaco', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
