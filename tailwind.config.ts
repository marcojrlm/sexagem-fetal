import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        pink: '#e57bc3',
        blue: '#3a40ca',
        primarycolor: '#235a7d',
        gray: '#828282',
        secondaryColor: '#fa968c',
        neutral: '#f0f0f0'
      }
    },
  },
  plugins: [],
}
export default config
