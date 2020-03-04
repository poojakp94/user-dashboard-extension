const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: "production",
  entry: './src/background.js',
  output: {
      filename: 'background.js',
      path: __dirname + '/build'
  },
  plugins: [
    new Dotenv()
  ]
}