import { merge } from 'webpack-merge';
import common from './webpack.common.js';

const port = process.env.PORT || 3000;

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port,
    hot: true,
    liveReload: true,
  },
});