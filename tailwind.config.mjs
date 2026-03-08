import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Atkinson", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", "Georgia", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        /* SEID/HyOS design tokens — reference your CSS custom properties */
        seid: {
          accent: "var(--color-accent)",
          bg: "var(--color-bg)",
          surface: "var(--color-bg-surface)",
          elevated: "var(--color-bg-elevated)",
          border: "var(--color-border)",
          text: "var(--color-text)",
          muted: "var(--color-text-muted)",
          subtle: "var(--color-text-subtle)",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "full",
            "--tw-prose-body": "var(--color-text-muted)",
            "--tw-prose-headings": "var(--color-text)",
            "--tw-prose-links": "var(--color-accent)",
            "--tw-prose-bold": "var(--color-text)",
            "--tw-prose-code": "var(--color-accent)",
            "--tw-prose-invert-body": "var(--color-text-muted)",
            "--tw-prose-invert-headings": "var(--color-text)",
            "--tw-prose-invert-links": "var(--color-accent)",
          },
        },
      },
      rotate: {
        "45": "45deg",
        "135": "135deg",
        "225": "225deg",
        "315": "315deg",
      },
      animation: {
        twinkle: "twinkle 2s ease-in-out forwards",
        meteor: "meteor 3s ease-in-out forwards",
      },
      keyframes: {
        twinkle: {
          "0%": {
            opacity: 0,
            transform: "rotate(0deg)",
          },
          "50%": {
            opacity: 1,
            transform: "rotate(180deg)",
          },
          "100%": {
            opacity: 0,
            transform: "rotate(360deg)",
          },
        },
        meteor: {
          "0%": {
            opacity: 0,
            transform: "translateY(200%)",
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
