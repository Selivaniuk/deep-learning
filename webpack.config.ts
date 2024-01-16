import path from "path"
import webpackConfig from './config/webpack/index'
import { BuildOptions, BuildEnv, BuildPaths } from "./config/webpack/types"

export default (env: BuildEnv) => {
  const defaultMode = "development"
  const defaultPort = 3000

  const paths: BuildPaths = {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode || defaultMode
  const port = env.port || defaultPort
  const isDev = mode === "development"

  const options: BuildOptions = {
    mode,
    isDev,
    port,
    paths
  }

  const config = webpackConfig(options)

  return config
}