var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    // The client requests to http://localhost:3000/__webpack_hmr would cancel
    // probably because it's using the devServer port (3000) instead of the
    // webpack-dev-server port (3030)
    //'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    // To teach webpack to make requests (for chunk loading or HMR) to the
    // webpack-dev-server you need to provide a full URL in the
    // output.publicPath option.
    // SEE: https://webpack.github.io/docs/webpack-dev-server.html#combining-with-an-existing-server
    publicPath: 'http://localhost:8080/static/'
  },
  plugins: [
    // SEE: https://github.com/gaearon/react-hot-loader/issues/127
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
