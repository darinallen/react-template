const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/client/index.js',
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  resolve: {
    extensions: ['.js', '.json', '.css']
  },
  devServer: {
    port: 3000,
    contentBase: './build'
  }
}
