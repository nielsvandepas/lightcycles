import path from 'path';

import Merge from 'webpack-merge';
import Webpack from 'webpack';

import Development from './development.config.babel';

export default Merge(Development, {
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    compress: true,
    // Disable this as soon as possible, currently the server doesn't
    // work at all without this option
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 9000,
    hot: true
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ]
});
