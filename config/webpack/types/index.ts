export type BuildMode = 'production' | 'development'

export type Port = number | string | "auto"

export interface BuildEnv {
    mode: BuildMode,
    port: Port
}

export interface BuildPaths {
    entry: string,
    output: string
    html: string
    src: string
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: Port
}