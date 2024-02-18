import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,svg}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,svg}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,svg}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '767px',
          lg: '898px',
          xl: '1024px',
          '2xl': '1280px',
        },
      },
      screens: {
        statsSM: '530px',
        sm: '640px',
        statsMD: '700px',
        statsXL: '1024px',
        lg: '898px',
      },
      backgroundColor: {
        accent: {
          100: 'hsl(0, 100%, 97%)',
          300: 'hsl(0, 100%, 80%)',
          350: 'hsl(0, 100%, 75%)',
          400: 'hsl(0, 100%, 70%)',
          500: 'hsl(0, 100%, 60%)',
        },
      },
      colors: {
        accent: {
          300: 'hsl(0, 100%, 80%)',
          350: 'hsl(0, 100%, 75%)',
          400: 'hsl(0, 100%, 70%)',
          500: 'hsl(0, 100%, 60%)',
        },
      },
      borderColor: {
        accent: {
          300: 'hsl(0, 100%, 80%)',
          400: 'hsl(0, 100%, 70%)',
        },
      },
    },
  },
};

export default config;
