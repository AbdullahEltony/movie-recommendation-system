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
        wrapperBg: "var(--wrapper-bg)",
        foreground: "var(--text)",
        primary: "var(--primary)",
        secondaryBg: "var(--secondary-bg)",
      },
    },
  },
  plugins: [],
} satisfies Config;
