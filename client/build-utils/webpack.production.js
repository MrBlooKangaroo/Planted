const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const createCSSUse = ({ modules } = {}) => [
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: { importLoaders: 1, modules },
  },
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [postcssPresetEnv({ stage: 2 })],
    },
  },
];

module.exports = () => ({
  mode: 'production',
  output: {
    filename: '[name].[hash].js',
    publicPath: process.env.WEBPACK_PUBLIC_PATH || '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        include: /node_modules/,
        use: createCSSUse(),
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: createCSSUse({ modules: true }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: path.resolve('.') }),
    new CompressionWebpackPlugin({
      test: /\.(js|html|css|scss)$/,
      threshold: 10240,
    }),
    new MiniCssExtractPlugin({ filename: '[name].[hash].css' }),
  ],
  devtool: 'source-map',
});
