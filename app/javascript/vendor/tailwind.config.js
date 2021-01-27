module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Header specific column configuration
       'header': '10% 90%',
      },
      gridTemplateRows: {
        // Header specific column configuration
       'header': 'auto auto',
      }
    },
    fontFamily: {
      'sans': ['Lato']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
