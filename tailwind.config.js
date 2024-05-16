/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-auth': "url('assets/images/banner-auth.jpg')",
      },
      zIndex: {
        '100': '100'
      },
    },
  },
  plugins: [
    animations
  ],
}

