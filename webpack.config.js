const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.tsx',
  output: {
    path: resolve('./dist/app'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/env',
              {
                targets: {
                  browsers: ['last 2 Chrome versions'],
                  node: 'current',
                },
              },
            ],
            '@babel/react',
            '@babel/preset-typescript',
          ],
          plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
          env: {
            instrumented: {
              plugins: [
                [
                  'istanbul',
                  {
                    exclude: ['**/*e2e*'],
                  },
                ],
              ],
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    alias: {
      '#components': resolve(__dirname, `./src/components`),
      '#public': resolve(__dirname, `./src/public`),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new CopyPlugin({
      patterns: [{ from: 'public', to: 'public', filter: (resourcePath) => !resourcePath.includes('index.html') }],
    }),
  ],
};
