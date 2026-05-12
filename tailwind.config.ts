import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1120",
        electric: "#2563EB",
        cyan: "#06B6D4"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(37, 99, 235, 0.24)",
        cyan: "0 0 35px rgba(6, 182, 212, 0.18)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 10%, rgba(37,99,235,0.28), transparent 28%), radial-gradient(circle at 80% 0%, rgba(6,182,212,0.2), transparent 24%)"
      }
    }
  },
  plugins: []
};

export default config;
