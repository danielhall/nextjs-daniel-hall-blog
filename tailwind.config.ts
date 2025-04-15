import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geistSans: "var(--font-geist-sans)", // Use the CSS variable
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navigation: "var(--navigation)",
        navigationSecondary: "var(--navigationSecondary)"
      },
    },
  },
  plugins: [],
} satisfies Config;
