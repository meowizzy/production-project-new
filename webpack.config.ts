import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { type BuildEnv, type BuildOptions } from "./config/build/types/config";
import { type WebpackConfiguration } from "webpack-cli";

export default (env: BuildEnv): WebpackConfiguration => {
    const PORT = env.port || 3000;
    const mode = env.mode || "development";
    const isDev = mode === "development";
    const apiUrl = env.apiUrl || "http://localhost:3001";

    const options: BuildOptions = {
        mode,
        port: PORT,
        isDev,
        apiUrl,
        path: {
            entry: path.resolve(__dirname, "src", "index.tsx"),
            build: path.resolve(__dirname, "build"),
            html: path.resolve(__dirname, "public", "index.html"),
            src: path.resolve(__dirname, "src")
        }
    };

    return buildWebpackConfig(options);
};