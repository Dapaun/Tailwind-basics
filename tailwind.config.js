const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  prefix: "dd-",
  theme: {
    extend: {
      colors: {
        primary: '#489fb5',
      },
      fontFamily: {
        'sans': ["OpenSans", ...defaultTheme.fontFamily.sans],
        'chronicle-disp': ["ChronicleDisp"],
        nunito: ['Nunito',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo']
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl'), color: theme('colors.blue.800'), cursor: theme('cursor.pointer') },
        '@font-face': {
          fontFamily: "OpenSans",
          fontWheight: 400,
          src: 'url(/src/assets/fonts/OpenSans-Regular.ttf)'
        },
        '@font-face': {
          fontFamily: 'ChronicleDisp',
          fontWheight: 400,
          src: 'url(/src/assets/fonts/ChronicleDisp-Black.otf)'
        }
      })
    })
  ]
}
