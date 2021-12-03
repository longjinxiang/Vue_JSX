const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: "./src/index.js",

  devServer: {
    static: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Web ui',
      template: './index.html',
      filename: 'index.html',
      inject: 'true',
      minify: {
        removeComments: true
      }
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, // 排除文件
        loader: 'babel-loader'
      }
    ],
  }
};
