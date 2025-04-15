import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/app.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Btoa(toB): A Base64 Encoder/Decoder for JSON'
    })
  ],
};