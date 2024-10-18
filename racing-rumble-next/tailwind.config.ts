import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        logo: ['var(--font-orbitron)']
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#0a0a0a",
            foreground: "#E6FAFE",
            divider: "#E69DAA",
            focus: {
              DEFAULT: "#F75574",
              foreground: '#006FEE'
            },
            primary: {
              DEFAULT: '#2D0D88',
              foreground: '#2D0D88'
            },
            secondary: {
              DEFAULT: '#C5277D',
              foreground: '#f31260'
            },
            success: {
              DEFAULT: "#193488",
              foreground: "#17c964"
            },
            warning: {
              DEFAULT: "#B50EA8",
            },
            danger: {
              DEFAULT: "#D54964"
            }
          }
        }
      }
  })],
};

export default config;
