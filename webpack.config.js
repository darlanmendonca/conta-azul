const HtmlWebpackPlugin = require('html-webpack-plugin')
const Uglify = require('uglifyjs-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: require('path').resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  stats: 'errors-only',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.pug',
    }),
    new Uglify(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {baseDir: ['dist']},
      single: true,
      ui: false,
      notify: false,
      cors: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: [
          'html-loader',
          'pug-html-loader',
        ]
      },
    ],
  }
}