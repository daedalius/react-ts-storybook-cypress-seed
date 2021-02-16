const webpackPreprocessor = require('@cypress/webpack-preprocessor');

const projectWebpackConfig = require('../../webpack.config.js');

// Replace complex image loading by primitive url-loader (base64)
projectWebpackConfig.module.rules = projectWebpackConfig.module.rules.map((rule) => {
  if(rule.test.source === '\\.(png|jpe?g|gif)$') {
    return {
      test: rule.test,
      use: [
        {
          loader: 'url-loader'
        }
      ]
    }
  }

  return rule
})

const webpackOptions = {
  resolve: projectWebpackConfig.resolve,
  module: projectWebpackConfig.module,
};

const options = {
  webpackOptions,
};

module.exports = webpackPreprocessor(options);
