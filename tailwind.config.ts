import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#050505",
          950: "#050505",
          900: "#09090B",
          850: "#0D0D10",
          800: "#121216",
          700: "#1A1A22",
        },
        accent: {
          DEFAULT: "#00FF94",
          light: "#5CFFB8",
          dim: "#00C874",
          glow: "rgba(0, 255, 148, 0.15)",
          border: "rgba(0, 255, 148, 0.35)",
        },
        zinc: {
          100: "#FAFAFA",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
        },
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "system-ui", "-apple-system", "sans-serif"],
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "Menlo", "Courier New", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
        widest: "0.15em",
        superwide: "0.25em",
      },
      lineHeight: {
        tightest: "0.92",
        editorial: "0.98",
      },
      backgroundImage: {
        "spotlight-gradient": "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.06), transparent 60%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "border-beam": "beam 8s linear infinite",
      },
      keyframes: {
        beam: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
