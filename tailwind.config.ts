import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [
    require("@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset"),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SpaceGrotesk"', 'sans-serif'],
        "dm-sans": ['var(--font-dm_sans)']

      },
      colors: {
        gold: '#DFB511',
        lightAsh: '#1D1F26',
        darkAsh: '#101010',
        lightGray: '#ECEFE1'
      }
    },
  },
  plugins: [],
}
export default config
