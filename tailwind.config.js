/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 1px 8px rgba(0, 0, 0, 0.3)',
        'custom-2': '0 -1px 1px rgba(0, 0, 0, 0.3)',
        'custom-3': '1px 0 1px rgba(0, 0, 0, 0.3)',
        'custom-4': '-1px 0 3px rgba(0, 0, 0, 0.3)',
      },
      
    },
  },
};
