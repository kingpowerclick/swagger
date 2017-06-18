import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import { CONFIG, APP_PATH } from './config';

export default merge({
  devtool: 'source-map',

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
    new HtmlWebpackPlugin({
      inject: true,
      template: `${APP_PATH}/template.html`,
      favicon: `${APP_PATH}/assets/images/favicon.jpg`,
    }),

    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: APP_PATH,
      files: '**/*.css',
    })
  ],

  performance: {
    hints: false,
  },

  devServer: {
    noInfo: false,
    open: true,
    hot: false,
    inline: true,
    stats: {
      colors: true,
      hash: true,
      version: true,
      timings: true,
      assets: true,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: false,
    },
    port: 9999,
    historyApiFallback: true,
  },
}, CONFIG);
