'use strict'
//const webpack = require('webpack');
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//var webpack = require('webpack');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
//if(process.env.NODE_ENV === 'local_production') {
//webpack_config.plugins.push(
//  new BundleAnalyzerrPlugin(
//    {
//      analyzerMode: 'server',
//      analyzerHost: '127.0.0.1',
//      analyzerPort: 8889,
//      reportFilename: 'report.html',
//      defaultSizes: 'parsed',
//      openAnalyzer: true,
//      generateStatsFile: false,
//      statsFilename: 'stats.json',
//      statsOptions: null,
//      logLevel: 'info'
//    }
//  )
//);
//}


module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      /* 新增mui*/
//    'src': path.resolve(__dirname, '../static'),,  
//    // 2. 定义别名和插件位置  
//    'mui': path.resolve(__dirname, '../static/utils/js/mui.js')  
    }
    /* 新增mui*/
//  plugins: [  
//  new webpack.ProvidePlugin({  
//      mui: "mui",  
//      "window.mui": "mui"  
//  })  
//]
  },
//externals:{
//  'BMap': 'BMap'
//},
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
		query: {
			presets: ['es2015']
		}
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
//plugins: [
//		new webpack.ProvidePlugin({
//		jQuery: "jquery",
//		$: "jquery",
//		'window.jQuery': "jquery"
//		})
//	],  
}
