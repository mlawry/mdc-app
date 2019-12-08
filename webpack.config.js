var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
  {
    entry: './app/index.js',
    devtool: false,
    mode: "development",
    module: {
      rules: [{
        exclude: /(js-file-download|xml-but-prettier)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        ]
      }]
    },
    output: {
      filename: 'index_bundle.js',
      path: __dirname + '/dist'
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: 'node_modules/swagger-ui/dist/swagger-ui.css', to: 'swagger-ui.css' }
      ]),
    ],
  },
  {
    entry: './app/index.scss',
    devtool: false,
    mode: "development",
    module: {
      rules: [{
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'index_bundle.css'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [ './node_modules' ]
            }
          }
        ]
      }]
    },
    output: {
      // This is necessary for webpack to compile. We never use ignore-style-bundle.js
      filename: 'ignore-style-bundle.js',
      path: __dirname + '/dist'
    }
  }
];
