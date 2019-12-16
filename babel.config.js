module.exports = {
  presets: [ '@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript' ],
  plugins: [
    [
      "file-loader",
      {
        "name": "[hash].[ext]",
        "extensions": ["ttf"]
      }
    ]
  ]
};
