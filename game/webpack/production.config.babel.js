import Merge from 'webpack-merge';

import Base from './base.config.babel';

export default Merge(Base, {
  mode: 'production'
});
