/// <reference types="cypress" />

const webpackPreprocessor = require('./webpack-preprocessor.js');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('file:preprocessor', webpackPreprocessor);
  return config;
};
