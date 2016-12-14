const { resolve } = require('path')
const validator = require('webpack-validator')
const { getIfUtils } = require('webpack-config-utils')
const webpack = require('webpack')
const server = require('./server');

module.exports = env => {
  const { ifProd } = getIfUtils(env)

  const config = {
    context: resolve('src'),
    entry: {
      app: './app',
      example01: './js/example01'
    },
    output: {
      path: resolve('public/dist'),
      filename: '[name].bundle.js',
      publicPath: '/dist/'
    },
    devtool: ifProd('source-map', 'eval'),
    module: {
      loaders: [
        { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
        { test: /\.styl$/, loaders: ['style-loader', 'css-loader?-minimize', 'postcss-loader', 'stylus-loader'] }
      ]
    },
    devServer: server
  }

  return validator(config)
}
