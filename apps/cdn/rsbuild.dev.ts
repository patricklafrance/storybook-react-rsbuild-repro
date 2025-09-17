import type { RsbuildConfig } from "@rsbuild/core";
import { distPath, entry, plugins } from "./rsbuild/common.ts";

const config: RsbuildConfig = {
    mode: "development",
    dev: {
        assetPrefix: "http://localhost:8081",
        writeToDisk: true,
        lazyCompilation: false
    },
    server: {
        host: "localhost",
        port: 8081,
        historyApiFallback: true,
        strictPort: true
    },
    source: {
        entry
    },
    output: {
        target: "web",
        distPath
    },
    plugins: [
        ...plugins
    ],
    tools: {
        htmlPlugin: false,
        rspack: {
            optimization: {
                chunkIds: "named"
            }
        }
    }
};

export default config;
