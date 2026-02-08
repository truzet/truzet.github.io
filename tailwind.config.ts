import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#0a0a0b",
          secondary: "#1a1a1f",
          tertiary: "#2d2d35",
        },
        accent: {
          primary: "#10b981",    // Emerald 500
          secondary: "#059669",  // Emerald 600
          tertiary: "#047857",   // Emerald 700
          light: "#d1fae5",      // Emerald 100
          dark: "#065f46",       // Emerald 800
        },
        text: {
          primary: "#fafafa",
          secondary: "#a1a1aa",
          muted: "#71717a",
          dark: "#3f3f46",
        },
        border: {
          light: "rgba(255, 255, 255, 0.1)",
          medium: "rgba(255, 255, 255, 0.15)",
          strong: "rgba(255, 255, 255, 0.2)",
        },
      },
      fontFamily: {
        sans: ["Inter", "IBM Plex Sans Arabic", "sans-serif"],
        arabic: ["IBM Plex Sans Arabic", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
      },
      boxShadow: {
        // Glass Shadows
        "glass": "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "glass-lg": "0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
        
        // Button Shadows
        "button": "0 4px 14px rgba(16, 185, 129, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)",
        "button-hover": "0 8px 24px rgba(16, 185, 129, 0.5), 0 4px 8px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(16, 185, 129, 0.4)",
        
        // Glow Effect
        "glow": "0 0 24px rgba(16, 185, 129, 0.4), 0 0 48px rgba(16, 185, 129, 0.2), 0 8px 32px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        // Minimal Animations Only
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-gentle": "pulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;