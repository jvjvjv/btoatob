import { merge } from 'webpack-merge';
import common from './webpack.common.js';

const port = process.env.PORT || 3000;

const devServerConfig = {
  port,
  host: 'localhost',
  open: false,
  hot: true,
  historyApiFallback: true,
  client: {
    logging: 'info',
    overlay: true,
    progress: true,
  },
};

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: devServerConfig,
});