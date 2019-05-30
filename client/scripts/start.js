process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

require('dotenv').config();

process.on('unhandledRejection', err => {
  throw err;
});

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const {
  devServer: options,
  ...config
} = require('../build-utils/webpack.config')({
  mode: 'development',
});

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

server.listen(8080, options.host, () => {
  console.log('Starting server on http://localhost:8080');
});
