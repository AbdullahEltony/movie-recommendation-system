import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--main-bg)",
        foreground: "var(--text)",
        primary: "var(--primary)",
        sidenavBg: "var(--sidenav-bg)",
      },
    },
  },
  plugins: [],
} satisfies Config;
