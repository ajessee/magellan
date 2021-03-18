module.exports = {
  purge: [
    './app/**/*.html.erb'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Header specific column configuration
       'header': '10% 90%',
       '16': 'repeat(16, minmax(0, 1fr))',
       '32': 'repeat(32, minmax(0, 1fr))'
      },
      gridTemplateRows: {
        // Header specific column configuration
       'header': 'auto auto',
       '8': 'repeat(8, minmax(0, 1fr))',
       '16': 'repeat(16, minmax(0, 1fr))',
       '32': 'repeat(32, minmax(0, 1fr))'
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
        'span-25': 'span 25 / span 25',
        'span-26': 'span 26 / span 26',
        'span-27': 'span 27 / span 27',
        'span-28': 'span 28 / span 28',
        'span-29': 'span 29 / span 29',
        'span-30': 'span 30 / span 30'
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22'
      },
      gridColumn: {
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
        'span-25': 'span 25 / span 25',
        'span-26': 'span 26 / span 26',
        'span-27': 'span 27 / span 27',
        'span-28': 'span 28 / span 28',
        'span-29': 'span 29 / span 29',
        'span-30': 'span 30 / span 30'
      },
      gridColumnStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22'
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
