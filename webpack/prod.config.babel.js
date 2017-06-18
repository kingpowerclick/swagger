import webpack from 'webpack';
import merge from 'webpack-merge';
import CompressionPlugin from 'compression-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import { CONFIG, ROOT_PATH, APP_PATH } from './config';

export default merge({
  output: {
    path: `${ROOT_PATH}/build`,
    filename: 'bundle-[chunkhash].js',
    chunkFilename: 'chunk-[chunkhash].js',
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'postcss-loader',
      }],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [{
        loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
      }, {
        loader: 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
      }],
    }],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),

    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: APP_PATH,
      files: '**/*.css',
      failOnError: true,
    }),

    new webpack.optimize.OccurrenceOrderPlugin(true),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        ascii_only: true,
        comments: false,
      },
      sourceMap: false,
    }),

    new HtmlWebpackPlugin({
      inject: true,
      favicon: `${APP_PATH}/assets/images/favicon.jpg`,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeComments: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      template: `${APP_PATH}/template.html`,
    }),

    new CompressionPlugin({ asset: '[path].gz', algorithm: 'gzip' }),
  ],
}, CONFIG);
