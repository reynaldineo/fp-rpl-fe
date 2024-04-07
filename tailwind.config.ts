import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        primary: {
          50: '#E6F2F2',
          //* Background
          100: '#D5E9E9',
          200: '#BFDDDE',
          //* Complement
          300: '#AAD2D3',
          400: '#95C7C8',
          //* Default
          500: '#80BCBD',
          //* Hovered
          600: '#6B9D9D',
          //* Active
          700: '#557D7E',
          800: '#405E5F',
          900: '#2B3F3F',
        },
        secondary: {
          50: '#EDF8EB',
          //* Background
          100: '#E1F4DE',
          200: '#D2EECD',
          //* Complement
          300: '#C3E8BC',
          400: '#B4E3AC',
          //* Default
          500: '#A5DD9B',
          //* Hovered
          600: '#89B881',
          //* Active
          700: '#6E9367',
          800: '#536F4E',
          900: '#374A34',
        },
        base: {
          50: '#FEFEFA',
          //* Background
          100: '#FDFDF7',
          200: '#FCFCF2',
          //* Complement
          300: '#FCFCEE',
          400: '#FBFBEA',
          //* Default
          500: '#FAFAE6',
          //* Hovered
          600: '#D0D0C0',
          //* Active
          700: '#A7A799',
          800: '#7D7D73',
          900: '#53534D',
        },
        typo: {
          DEFAULT: '#1F1F1F',
          secondary: '#707070',
          tertiary: '#999CA0',
          icons: '#999CA0',
          divider: '#EBEBEB',
          outline: '#D9D9D9',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
