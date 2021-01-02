const webpackPreprocessor = require('@cypress/webpack-preprocessor');

const projectWebpackConfig = require('../../webpack.config.js');

const webpackOptions = {
  resolve: projectWebpackConfig.resolve,
  module: projectWebpackConfig.module,
};

const options = {
  webpackOptions,
};

module.exports = webpackPreprocessor(options);
