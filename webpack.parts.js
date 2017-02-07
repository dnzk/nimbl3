const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.devServer = function (conf) {
  return {
    devServer: {
      host: conf.host,
      port: conf.port
    }
  };
};

exports.loadCSS = function (conf) {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ]
                }
              }
            },
            'sass-loader'
          ]
        }
      ]
    }
  };
};

exports.autoprefix = function () {
  return {
    loader: 'postcss-loader',
    options: {
      plugins: function () {
        return [
          require('autoprefixer')
        ]
      }
    }
  };
};

exports.extractCSS = function (conf) {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: conf.use,
            fallback: 'style-loader'
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].[contenthash].css')
    ]
  }
};

exports.loadImages = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png)$/,
          use: {
            loader: 'file-loader'
          }
        }
      ]
    }
  };
};

exports.loadFonts = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(ttf|otf)$/,
          use: {
            loader: 'file-loader'
          }
        }
      ]
    }
  };
};

exports.loadJavascript = function (conf) {
  return {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: conf.include,
          options: {
            cacheDirectory: true,
          }
        }
      ]
    }
  };
};

exports.minifyJavascript = function (conf) {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: conf.useSourceMap,
        comments: false,
        compress: {
          warnings: false,
          drop_console: true
        },
      })
    ]
  }
};

exports.loadSprite = function () {
  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          options: {
            name: '[name]_[hash]'
          }
          // loader: 'svg-sprite?' + JSON.stringify({
          //   name: '[name]_[hash]',
          //   prefixize: true,
          // })
        }
      ]
    }
  }
};
