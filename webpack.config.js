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
      }, 
      {
        test: /\.css/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    hot: true,
    port: 9000,
    watchOptions: {
      poll: true
    },
    stats: 'minimal'
  }
}