// const Dotenv = require('dotenv-webpack');
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  // target: 'node',
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
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new DotenvPlugin({
      // sample: './.env.default',
      path: './.env'
    })
  ]
  // node: {
  //   fs: "empty"
  // },
  // plugins: [
  //   new Dotenv({
  //     path: './.env', 
  //     safe: true
  //   })
  // ]
};
