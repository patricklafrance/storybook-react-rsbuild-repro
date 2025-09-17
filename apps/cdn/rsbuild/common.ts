import type { RsbuildPlugin } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSvgr } from "@rsbuild/plugin-svgr";

export const entry = {
    "trial-banner": "./src/widgets/fte/trial-banner/index.tsx",
    "invitation-modal": "./src/widgets/fte/invitation-modal/index.tsx",
    "layout": "./src/widgets/navigation/layout/index.tsx",
    "navbar": "./src/widgets/navigation/navbar/index.tsx",
    "sidebar": "./src/widgets/navigation/sidebar/index.tsx"
};

export const distPath = {
    root: "./dist/app",
    js: "",
    css: ""
};

export const plugins: RsbuildPlugin[] = [
    pluginReact({
        fastRefresh: false
    }),
    pluginSvgr({
        svgrOptions: {
            exportType: "named"
        }
    })
];
