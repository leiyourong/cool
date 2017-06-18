var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      vue: {
              postcss: pack => {
              // see: https://github.com/ai/browserslist#queries
              const browsers = 'Android >= 4, iOS >= 7'

              return [
                require('postcss-import')({
                  // path: paths.src('application/styles')
                }),
                require('postcss-url')({
                  // basePath: paths.src('static')
                }),
                require('postcss-cssnext')({
                  browsers,
                  features: {
                    // customProperties: {
                    //   variables: require(paths.src('application/styles/variables'))
                    // },
                    // 禁用 autoprefixer，在 postcss-rtl 后单独引入
                    // 否则会跟 postcss-rtl 冲突
                    autoprefixer: false
                  }
                }),
                // 如果不需要 flexible，请移除
                require('postcss-flexible')({
                  remUnit: 75
                }),
                require('autoprefixer')({
                  browsers
                }),
                require('postcss-browser-reporter')(),
                require('postcss-reporter')()
              ]
            },
            autoprefixer: false
      }
    }),
  ]
})
