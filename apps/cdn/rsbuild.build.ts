import type { RsbuildConfig } from "@rsbuild/core";
import { pluginImageCompress } from "@rsbuild/plugin-image-compress";
import { distPath, entry, plugins } from "./rsbuild/common.ts";

const config: RsbuildConfig = {
    mode: "production",
    source: {
        entry
    },
    output: {
        target: "web",
        assetPrefix: "http://localhost:8081",
        distPath,
        cleanDistPath: true,
        minify: true
    },
    plugins: [
        ...plugins,
        pluginImageCompress(["jpeg", "png", "ico", "svg"])
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
