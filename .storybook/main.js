const { resolve } = require('path');
const createMdxCompiler = require('@storybook/addon-docs/mdx-compiler-plugin.js');
const CopyPlugin = require('copy-webpack-plugin');

const projectWebpackConfig = require('../webpack.config');

module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.module.rules = [
      {
        test: /\.mdx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['@babel/preset-react'],
            },
          },
          {
            loader: require.resolve('@mdx-js/loader'),
            options: {
              compilers: [createMdxCompiler({})],
            },
          },
        ],
      },
      ...projectWebpackConfig.module.rules,
    ];

    config.resolve.alias = {
      ...(projectWebpackConfig.resolve.alias || {}),
      '#storybook': resolve(__dirname, `./`),
    };

    // copying public folder
    config.plugins.push(
      (() => projectWebpackConfig.plugins.find(i => i instanceof CopyPlugin))()
    )

    return config;
  },
};
