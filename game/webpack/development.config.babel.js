import Merge from 'webpack-merge';

import Base from './base.config.babel';

export default Merge(Base, {
  mode: 'development',
  devtool: 'inline-source-map'
});
