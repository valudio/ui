const path = require('path');

module.exports = async ({ config }) => {
  // styles
  config.module.rules.push({
    test: /\.(sass|scss)$/,
    use: ['resolve-url-loader'],
    include: path.resolve(__dirname, '../')
  });

  // don't forget to return.
  return config;
};
