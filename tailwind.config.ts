import { colors } from './src/app/theme/colors'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      boxShadow: {
        "2xl": "0 4px 12px 0 rgba(139,153,169,0.24)"
      }
    }
  },
  plugins: [],
}
export default config
