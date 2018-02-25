const path = require('path');

module.exports = {
  entry: ['./src/js/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist_assets'),
    filename: 'js/[name].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
