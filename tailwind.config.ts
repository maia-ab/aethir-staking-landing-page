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
        'beige': '#FCFFF0',
        'black-green': '#1C2925',
        'darkgreen': '#496522',
        'green': '#C0E44C',
        'lightgreen': '#DBF48C',
        'fluorescent-green': '#D7FE51'
      },
      screens: {
        'xs': '320px',
        // => @media (min-width: 640px) { ... }
      }
    }

  },
  plugins: [],
};
export default config;
