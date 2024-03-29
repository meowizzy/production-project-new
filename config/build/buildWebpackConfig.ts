import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { BuildOptions } from "./types/config";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    return {
        mode: options.mode,
        entry: options.path.entry,
        output: {
            filename: 'bundle.[contenthash].js',
            chunkFilename: "chunk.[contenthash].js",
            path: options.path.build,
            clean: true,
            publicPath: "/"
        },

        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
        devtool: options.isDev ? "inline-source-map" : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined
    };
}