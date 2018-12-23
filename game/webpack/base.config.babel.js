import path from 'path';

import HtmlPlugin from 'html-webpack-plugin';

export default {
  entry: {
    cycles: './source/ts/cycles.ts'
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].[hash:4].js'
  },
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.ts',
      '.scss'
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'babel-loader',
          'ts-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: 'source/html/index.html'
    })
  ]
}
