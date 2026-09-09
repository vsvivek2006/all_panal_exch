import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080B11",
        surface: {
          DEFAULT: "#0F1622",
          light: "#162030",
          lighter: "#1E2C42",
        },
        gold: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          DEFAULT: "#F59E0B",
          glow: "#D4AF37",
        },
        neon: {
          green: "#00FF87",
          emerald: "#10B981",
          cyan: "#06B6D4",
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #B8860B 100%)",
        "gold-glow": "radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.15), transparent 70%)",
        "card-gradient": "linear-gradient(180deg, rgba(22, 32, 48, 0.8) 0%, rgba(15, 22, 34, 0.95) 100%)",
      },
      boxShadow: {
        "gold-sm": "0 0 15px rgba(245, 158, 11, 0.2)",
        "gold-md": "0 0 25px rgba(245, 158, 11, 0.35)",
        "gold-lg": "0 0 40px rgba(245, 158, 11, 0.5)",
        "neon-green": "0 0 20px rgba(0, 255, 135, 0.3)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
