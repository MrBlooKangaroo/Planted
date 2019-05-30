const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const modeConfig = env => require(`./webpack.${env}`)(env);
const presetConfig = require('./load-presets');

module.exports = ({ mode = 'production', presets = [] } = {}) =>
  webpackMerge(commonConfig, modeConfig(mode), presetConfig({ mode, presets }));
