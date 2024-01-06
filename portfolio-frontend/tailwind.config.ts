import type { Config } from 'tailwindcss'
import { } from "./src/assets/img/background/backgroundDark.svg";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D6CD2A',
        header: '#1B1B1B',
        textD: '#050505',
        textL: '#DAD7CE',
      },
      height: {
        'h-17': '4.5rem',
      },
      margin: {
        'm-0-auto': '0 auto',
      }
    },
  },
  plugins: [],
}
export default config
