var path = require('path');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      }
    ]
  }
}
