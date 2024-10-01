import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'img_bg': "url('./assets/site-bg-canva-min.png')",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary-orange': '#DD6E42',
        'primary-gray': '#EAEAEA',
        'primary-beige': '#E8DAB2',
        'primary-blue': '#4F6D7A',
        'secondary-blue': '#C0D6DF'
      },
    },
  },
  plugins: [],
};
export default config;
