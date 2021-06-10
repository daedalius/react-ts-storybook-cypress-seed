/// <reference types="cypress" />

const { startDevServer } = require('@cypress/webpack-dev-server')
const modifiedWebpackConfig = require('./modifiedWebpackConfig');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('dev-server:start', (options) => startDevServer({
    options: options,
    webpackConfig: modifiedWebpackConfig 
  }));
  
  return config;
};
