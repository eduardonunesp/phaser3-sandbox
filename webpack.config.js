const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const definePlugin = new webpack.DefinePlugin({
  WEBGL_RENDERER: true,
  CANVAS_RENDERER: false
})

module.exports = {
  entry: {
    index: [ 'babel-polyfill', path.resolve(__dirname, 'src/index.js') ],
    vendor: [ 'phaser' ]
  },
  mode: 'development',
  devtool: 'source-map',
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  watch: true,
  plugins: [
    definePlugin,
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
      chunks: [ 'vendor', 'index' ],
      chunksSortMode: 'manual',
      minify: {
        removeAttributeQuotes: false,
        collapseWhitespace: false,
        html5: false,
        minifyCSS: false,
        minifyJS: false,
        minifyURLs: false,
        removeComments: false,
        removeEmptyAttributes: false
      },
      hash: false
    }),
    new BrowserSyncPlugin({
      host: process.env.IP || 'localhost',
      port: process.env.PORT || 3000,
      server: {
        baseDir: './public'
      }
    })
  ],
  module: {
    rules: [
      { 
        test: /\.js$/, 
        use: [ 'babel-loader' ], 
        include: path.join(__dirname, 'src') 
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: ['raw-loader'],
        include: path.join(__dirname, 'src') 
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: ['file-loader'],
        include: path.join(__dirname, 'src') 
      }
    ]
  }
}
