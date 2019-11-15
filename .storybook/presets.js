const path = require('path');

module.exports = [
  {
    name: '@storybook/preset-typescript',
    options: {
      tsLoaderOptions: {
        configFile: path.resolve(__dirname, '../storybook.tsconfig.json'),
      },
      include: [path.resolve(__dirname, '../src')],
    },
  },
];
