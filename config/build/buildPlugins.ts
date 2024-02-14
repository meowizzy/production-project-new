import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack, { ProgressPlugin } from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins ({ path, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: path.html
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/bundle.[contenthash:8].css',
      chunkFilename: 'css/chunk.[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ]
}
