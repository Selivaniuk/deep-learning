import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { Port } from "../types";

const devServer = (port: Port): DevServerConfiguration => ({
    port,
    open: true,
})

export default devServer