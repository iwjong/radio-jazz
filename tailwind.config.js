/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#140f14",
          900: "#1a141c",
          800: "#241c28",
          700: "#302636",
          600: "#423848",
        },
        gold: {
          300: "#f4b88a",
          400: "#e8924a",
          500: "#d9732d",
          600: "#b85c22",
        },
        accent: {
          400: "#c4a8e8",
          500: "#9b7fd4",
        },
      },
      fontFamily: {
        display: ["'Manrope'", "system-ui", "sans-serif"],
        sans: ["'Manrope'", "system-ui", "sans-serif"],
        /** Top bar + quote generator blockquotes only */
        serif: ["'Fraunces'", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "Menlo", "monospace"],
      },
      boxShadow: {
        soft: "0 18px 50px -28px rgba(0, 0, 0, 0.52)",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
        "spin-slow": "spinSlow 14s linear infinite",
        "fade-in": "fadeIn 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};
