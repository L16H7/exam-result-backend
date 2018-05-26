module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }],

    rules: [
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      },
      {
          test: /\.s[a|c]ss$/,
          loader: 'sass-loader!style-loader!css-loader'
      },
      {
          test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  test: /\.scss$/,
  use: [{
    loader: 'style-loader',
  }, {
    loader: 'css-loader',
  }, {
    loader: 'sass-loader',
  }],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
