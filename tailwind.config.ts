import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        fadeInPage: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        shine: {
          "0%": {
            left: "-150%",
            backgroundPosition: "100% 50%",
            transform: "skewX(-30deg)", // Diagonal angle for shine
            opacity: "0.8", // Brighter shine at the start
          },
          "100%": {
            left: "150%",
            backgroundPosition: "0% 50%",
            transform: "skewX(-30deg)",
            opacity: "1", // Full brightness at the end
          },
        },
        gradientBlink: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      animation: {
        fadeInPage: "fadeInPage 1s ease-in-out forwards",
        shine: "shine 2s ease-out infinite", // Adjusted for smoother shine
        gradientBlink: "gradientBlink 6s ease infinite",
      },
      backgroundSize: {
        "400%": "400% 400%", // Large size for smooth gradient effect
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
