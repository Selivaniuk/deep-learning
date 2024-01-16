export type BuildMode = 'production' | 'development';

export type Port = number | string | 'auto';

export type BuildEnv = {
	mode?: BuildMode;
	port?: Port;
};

export type BuildPaths = {
	entry: string;
	output: string;
	html: string;
	src: string;
};

export type BuildOptions = {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: Port;
};
