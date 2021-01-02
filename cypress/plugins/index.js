/// <reference types="cypress" />

const typescriptPreprocessor = require('./ts-preprocessor.js');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('file:preprocessor', typescriptPreprocessor);
  return config;
};
