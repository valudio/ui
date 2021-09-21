const path = require('path');

module.exports = {
  stories: ['../**/stories.tsx'],
  addons: [
    'storybook-addon-jsx/register',
    'storybook-addon-jsx',
    '@storybook/preset-typescript',
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../storybook.tsconfig.json'),
        },
        include: [path.resolve(__dirname, '../src')],
      },
    }
  ]
};
