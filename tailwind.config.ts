import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      'lora-italic': ['Lora-Italic', 'sans-serif'],
      lora: ['Lora', 'sans-serif'],
      kurale: ['Kurale', 'sans']
    },
    colors: {
      'light-green': '#A6BF9F',
      'dark-green': '#56694A',
      'yellow-light': '#ffdf6d',
      yellow: '#FDD549',
      rose: '#EBB8B4',
      'light-blue': '#d3f3f5',
      beige: '#FFFBF4',
      'cyan-950': '#0D1C2E',
      
    },
    extend: {
      backdropFilter: {
        none: 'none',
        blur: 'blur(10px)'
      },
      boxShadow: {
        '2xl': 'box-shadow: inset -8px -6px 22px 10px rgba(0,0,0,0.55)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        santino: 'url("/assets/images/santino.png")',
        'santino-header': 'url("/assets/images/santino_header.png")',
        salads: 'url("/assets/images/salads.png")',
        'bg-green-1': 'url("/assets/images/bg_green_1.png")',
        'bg-green-2': 'url("/assets/images/bg_green_2.png")',
        'bg-leaves': 'url("/assets/images/bg_leaves.png")',
        'bg-splat': 'url("/assets/images/bg_splat.png")',
        'bg-white': 'url("/assets/images/bg_white.png")',
        'logo-small-black': 'url("/assets/images/logo_small_black.png")',
        'logo-small-green': 'url("/assets/images/logo_small_green.png")',
        'logo-small-yellow': 'url("/assets/images/logo_small_yellow.png")',
        'main-logo': 'url("/assets/images/main_logo.png")',
        'main-logo-2': 'url("/assets/images/main_logo_2.png")',
        splat: 'url("/assets/images/splat.png")'
      }
    }
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'], // or other variants
      backgroundAttachment: ['responsive']
    }
  },

  plugins: [require('@tailwindcss/postcss7-compat'), require('tailwindcss-no-scrollbar')]
};
export default config;
