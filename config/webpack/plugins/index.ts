import HtmlWebpackPlugin from "html-webpack-plugin";
import { WebpackPluginInstance, ProgressPlugin } from "webpack";
import { BuildPaths } from "../types";


const configurationPlugins = (paths: BuildPaths): WebpackPluginInstance[] => ([
        new HtmlWebpackPlugin({template: paths.html}),
        new ProgressPlugin(),
])

export default configurationPlugins;