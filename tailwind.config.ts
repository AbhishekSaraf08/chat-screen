import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        movemenu:{
          '0%': { transform: 'translateX(-100px)' },  
            '100%': { transform: 'translateX(130px)' },  
      }
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation:{
        movemenu: 'movemenu 0.6s ease-in-out forwards',
      }
    },
  },
  plugins: [
  
      require('tailwind-scrollbar-hide')
  
  ],
} satisfies Config;
