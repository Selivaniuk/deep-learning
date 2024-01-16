import { ResolveOptions } from "webpack";
import { BuildPaths } from "../types";

const resolves = (paths: BuildPaths): ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
}) 

export default resolves;