const path = require('path');

module.exports = {
  stories: ['../src/**/stories.tsx'],
  addons: [
    '@storybook/preset-typescript',
    'storybook-addon-jsx',
    '@storybook/addon-actions'
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  }
};
