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
        "custom-black": "#111315",
        "custom-gray": "#1B1D1F",
        "custom-yellow": "#F6C768",
        "custom-red": "#ED735D",
        "custom-white": "#FEF7EE",
        "custom-teal": "#BEE3CC",
        "custom-light-gray": "#6F757C",
      },
    },
  },
  plugins: [],
};
export default config;
