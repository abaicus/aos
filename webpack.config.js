var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/js/aos.js',
  devtool: 'source-map',
  output: {
    path: './../hestia-pro/assets/js',
    publicPath: '../hestia-pro/assets/js/',
    filename: 'aos.min.js',
    library: 'AOS',
    libraryTarget: 'umd',
    sourceMap: false
  },
  devServer: {
    contentBase: 'demo/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader!postcss-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('aos.min.css'),
    new webpack.optimize.UglifyJsPlugin()
  ]
}
