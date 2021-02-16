export default {
  moduleNameMapper: {
    '\\.(css|styl|less|sass|scss|png|jpg|jpeg|ttf|woff|woff2)$': '<rootDir>/jest-empty-module.js',
  },
  testMatch: ['**/*.unit.tests.[jt]s?(x)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
};
