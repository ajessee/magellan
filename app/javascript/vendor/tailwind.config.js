module.exports = {
  purge: [
    './app/**/*.html.erb'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'aliceblue': '#f0f8ff',
     }),
    extend: {
      colors: {
        'aliceblue': '#f0f8ff'
      }
    },
    fontSize: {
      'tiny': '.675rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '8rem',
      '11xl': '9rem',
      '12xl': '10rem',
      '13xl': '11rem',
      '14xl': '12rem',
      '15xl': '13rem',
      '16xl': '14rem',
      '17xl': '15rem',
      '18xl': '16rem',
      '18-rem': ['18rem', {
        lineHeight: '0rem'
      }],
      '20-rem': ['20rem', {
        lineHeight: '0rem'
      }],
      '22-rem': ['22rem', {
        lineHeight: '0rem'
      }],


    },
    extend: {
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/5': '60%',
        '3/4': '75%',
        'full': '100%',
      },
      height: {
        'half': '50vh',
        'three-quarters': '75vh',
      },
      screens: {
        '3xl': '2000px',
      },
    },
    fontFamily: {
      'sans': ['Lato']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
}
