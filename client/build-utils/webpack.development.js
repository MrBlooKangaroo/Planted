const postcssPresetEnv = require('postcss-preset-env');
const path = require('path');

const createCSSUse = ({ modules } = {}) => [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      localIdentName: modules && '[path][name]__[local]--[hash:base64:16]',
      modules,
    },
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
  mode: 'development',
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
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
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
  },
});
