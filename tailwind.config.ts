import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // extra
        primary:"#F6F7F9", //light white ike gray
        secondary:"#ffffff",
        secondary2:"#C3D4E9",
        seconday3:"#1A202C",//light black
        button1:"#3563E9",//blue
        button2:"#ED3F3F",///redidh
        button3:"#90A3BF",//light gray
        button4:"#596780",//dark gray
        ad1:"#54A6FF",//light blue
      },
      fontFamily: {
        jarka: ['var(--font-PlusJakartaSans)'],
      },
      screens:{
        'mid':'870px',
        'bd':'950px',
      }
    },
  },
  plugins: [],
} satisfies Config;
