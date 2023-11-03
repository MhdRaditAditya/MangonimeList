/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      color: {
        'blue-dark': '#1F3A5F',
        'blue-tosca': '#005461',
        'yellow-fun': '#ffc639',
        'card-dark': '#393E46',
        'card-light': '#F2EFE9',
        'dark': '#222831',
        'light': '#e7f4ff',
        'primary': '#eaf0fc',
        'secondary': '#18181a'
      },
    },
  },
  plugins: [],
}
