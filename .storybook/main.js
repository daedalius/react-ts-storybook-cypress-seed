const { resolve } = require('path');
const createMdxCompiler = require('@storybook/addon-docs/dist/mdx/mdx-compiler-plugin.js');

const projectWebpackConfig = require('../webpack.config');

module.exports = {
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

    return config;
  },
};
