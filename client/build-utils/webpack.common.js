const path = require('path');
const getClientEnvironment = require('./get-client-environment');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./commonPaths');

module.exports = {
  module: {
    rules: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)(\?.*)?$/,
          /\.css$/,
          /\.scss$/,
          /\.svg$/,
          /\.json$/,
          /\.mjs$/,
          /\.graphql$/,
          /\.mp3$/,
        ],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(svg|mp3)$/,
        loader: 'file-loader',
        query: {
          name: 'static/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.graphql$/,
        loader: 'raw-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(getClientEnvironment().stringified),
    new HtmlWebpackPlugin({
      template: 'src/index.tmpl.html',
      inject: 'body',
      env: process.env,
    }),
  ],
  resolve: {
    modules: [
      path.resolve('node_modules'),
      path.resolve('src'),
      path.resolve('.'),
    ],
    alias: {
      api: commonPaths.apiFolder,
      components: commonPaths.componentsFolder,
      constants: commonPaths.constantsFolder,
      utils: commonPaths.utilsFolder,
      assets: commonPaths.assetsFolder,
    },
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json', '*'],
  },
};
