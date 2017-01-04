var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

/**
 * Webpack Plugin
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var commonConfig = require('./webpack.common.js');
var CompressionPlugin = require('compression-webpack-plugin');


module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  htmlLoader: {
    minimize: false // workaround for ng2
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new WebpackMd5Hash(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].[hash].css'),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip", 
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.5
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ],
    
  devServer: { 
      compress: true 
  }
    
});
