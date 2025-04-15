import path from 'path';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'production',
  output: {
    filename: 'app.js',
    path: path.resolve(import.meta.dirname, '../dist'),
    clean: true,
  },
});