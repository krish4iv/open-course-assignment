
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#403E43",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F6F6F7",
          foreground: "#403E43",
        },
        accent: {
          DEFAULT: "#9b87f5",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#8E9196",
          foreground: "#FFFFFF",
        },
        highlight: {
          DEFAULT: "#D6BCFA",
          foreground: "#403E43",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.7s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}