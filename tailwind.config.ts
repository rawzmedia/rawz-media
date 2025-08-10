import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        eurostile: ['"Eurostile Extended"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
