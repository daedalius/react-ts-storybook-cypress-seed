/// <reference types="cypress" />

const { startDevServer } = require('@cypress/webpack-dev-server');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('dev-server:start', (options) =>
    startDevServer({
      options: options,
      webpackConfig: require('../../webpack.config'),
    })
  );

  return config;
};
