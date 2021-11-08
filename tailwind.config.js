module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#6e89c6',
        DEFAULT: '#364f88',
        dark: '#0f1626',
      },
      orange: {
        light: '#ff533d',
        DEFAULT: '#ee1b00',
        dark: '#9f1200',
      },
      yellow: {
        dark: '#837153',
        DEFAULT: '#9c8562',
        light: '#ab987a',
      },
      gray: {
        dark: '#52525b',
        DEFAULT: '#a1a1aa',
        light: '#f4f4f5',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
