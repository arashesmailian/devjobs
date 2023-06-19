const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.bundle.[hash].js',
    chunkFilename: '[id].[hash].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './src',
    historyApiFallback: true, // for router added
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
    alias: {
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/style'),
      '@typings': path.resolve(__dirname, 'src/types'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: path.resolve(__dirname, 'src', 'favicon-32x32.ico'),
    }),
    new CompressionPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}
