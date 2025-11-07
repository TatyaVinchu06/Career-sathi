/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}',
    './chatbot/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'bounce-gentle': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      colors: {
        'gray-25': '#fafafa',
        'blue-25': '#f0f9ff',
        'green-25': '#f0fdf4',
      },
    },
  },
  plugins: [],
};
