const HtmlWebpackPlugin = require('html-webpack-plugin')
const Uglify = require('uglifyjs-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const SassPlugin = require('sass-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
    new CopyWebpackPlugin([
      {
        from: 'src/**/*.svg', 
        to: 'images', 
        flatten: true,
      },
    ]), 
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
    new SassPlugin('./src/index.scss', {
      sourceMap: true,
      sass: {outputStyle: 'compressed'},
      autoprefixer: false,
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
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ]
      },
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  }
}