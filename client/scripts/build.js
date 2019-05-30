process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

require('dotenv').config();

process.on('unhandledRejection', err => {
  throw err;
});

const webpack = require('webpack');
const config = require('../build-utils/webpack.config')({
  mode: 'production',
});

const compiler = webpack(config);
compiler.run((_err, stats) => {
  const stringifiedStats = stats.toString({ colors: true });
  console.log(stringifiedStats);
});
