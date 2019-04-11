module.exports = {
  entry: {
    app: './client/js/app.js'
  },

  output: {
    filename: '[name].js',
    path: __dirname + '/public/javascripts'
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

