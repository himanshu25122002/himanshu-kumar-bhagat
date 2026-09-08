import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F7F5",
        paperDim: "#EFEEEA",
        ink: "#14161C",
        inkSoft: "#4B4E58",
        line: "#DCDAD3",
        accent: "#2E4C8A",
        accentSoft: "#EAF0FB",
        gold: "#A8791F",
        goldSoft: "#F6EEDD",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};

export default config;
