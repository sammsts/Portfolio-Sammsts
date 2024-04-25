const path = require('path');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  entry: './src/App.css',
  output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.css'
  },
  theme: {
    extend: {
      colors: {
        primary: '#032127',
      },
      fontFamily: {
        'abhaya-libre': ['Font Primary', 'abhaya-libre'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
}