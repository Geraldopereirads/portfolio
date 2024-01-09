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
      gradientColorStops: {
        'custom': '34deg, rgba(214, 205, 42, 0.95) 0%, rgba(27, 27, 27, 0.95) 55%'
      },
      height: {
        'h-17': '4.5rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients')
  ],
}
export default config
