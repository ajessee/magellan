module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Header specific column configuration
       'header': '10% 90%',
       '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        // Header specific column configuration
       'header': 'auto auto',
       '8': 'repeat(8, minmax(0, 1fr))',
       '16': 'repeat(16, minmax(0, 1fr))'
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-10': 'span 10 / span 10'
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13'
      }
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
