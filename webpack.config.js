module.exports = {
  entry: './client/js/app.js',

  output: {
    filename: './public/javascripts/app.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  devtool: 'source-map'
}

