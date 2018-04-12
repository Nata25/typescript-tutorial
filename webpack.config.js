const webpack = require('webpack');

module.exports = {
  entry: './src/app.ts',

  output: {
    filename: 'app.js',
    path: __dirname + './dist'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  watch: true,

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },

  devServer: {
    watchOptions: {
      poll: true
    },
    stats: 'minimal'
  }
}