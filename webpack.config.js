const webpack = require('webpack');
const path = require('path');
// markdown conver to html
var marked = require("marked");
var renderer = new marked.Renderer();

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      './index'
    ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './public'),
  },

  devServer: {
    hot: true,
    inline: true,
    host: 'localhost',
    port: 4000,
    historyApiFallback: true,
    contentBase: __dirname + '/public/'
  },
  module: {
    // https://velopert.com/1492
    rules: [
      /*  {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'eslint-loader',
       enforce: 'pre',
       query: {
       confile: './.eslintrc-tmp',
       },
       }, */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties',
            'transform-async-functions'
          ]
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|woff|woff2|svg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.md$/,
        loaders: ['raw-loader'],
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
