import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       colors: {
        color1:'hsl(0,0%,100%)',
        color2:'hsl(0,0%,0%)',
        color3:'hsl(281,89%,11%)',
        color4:'hsl(0,0%,89%)',
        color5:'hsl(0,0%,12%)',
        color6:'hsl(257,37%,53%)',
        text_blue:'hsl(248,92%,10%)',
        bluebg:'hsl(266,94%,52%)',
        darkbluebg:'	hsl(227, 49%, 15%)',
        mintbg:'hsl(160, 76%, 64%)',
        purplebg:'hsl(257,37%,53%)',
        logoBlue:'hsl(196,98%,19%)',
        graydark:'hsl(0,0%,85%)',
        backgroundImage: {
          'hero': "url('/assets/wavebg.svg')",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    minWidth: {
      '1/2': '50%',
    },
    
  },
  
  plugins: [],
}
export default config


/*
    sm: '300px',
      md: '868px',
      lg: '1206px',
      xl: '1850px',

*/