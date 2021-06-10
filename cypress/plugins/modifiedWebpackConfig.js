const projectWebpackConfig = require('../../webpack.config');

// Replaces complex image loading by primitive url-loader (base64)
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

module.exports = projectWebpackConfig
