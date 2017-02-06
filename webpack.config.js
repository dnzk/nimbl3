const ENV = {
  PROD: 'production',
  DEV: 'development'
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
};

const common = merge([
  {
    entry: {
      app: PATHS.app,
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'template', 'index.html')
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    }
  },
  parts.loadImages(),
  parts.loadFonts(),
  parts.loadJavascript({ include: PATHS.app }),
]);

module.exports = function (env) {
  if (env === ENV.PROD) {
    // prepare for future additions to production
    return merge([
      common,
      {
        output: {
          chunkFilename: 'scripts/[chunkhash].js',
          filename: '[name].[chunkhash].js'
        }
      },
      parts.extractCSS({
        use: ['css-loader', parts.autoprefix(), 'sass-loader']
      }),
      parts.minifyJavascript({ useSourceMap: true }),
    ])
  }
  return merge([
    common,
    parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT
    }),
    parts.loadCSS()
  ]);
};
