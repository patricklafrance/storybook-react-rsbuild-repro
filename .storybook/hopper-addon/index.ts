import type { StorybookConfig } from "storybook-react-rsbuild";

export interface HopperPresetOptions {
    /**
     * Add the color schemes to the Storybook Toolbar
     * @default true
     */
    addColorSchemesToolbar?: boolean;
    /**
     * Add the locales to the Storybook
     * @default true
     */
    addLocalesToolbar?: boolean;
    /**
     * Configure the viewport addon to use the hopper's viewport values
     * @default true
     */
    configureViewports?: boolean;
    /**
     * Preload all hopper fonts
     * @default true
     */
    preloadFonts?: boolean;
    /**
     * Add or not the decorator to the stories
     * @default true
     */
    withDecorator?: boolean;
}

export interface HopperParameters {
    /**
     * The height of the preview.
     */
    height?: number;
    /**
     * Whether to disable animations. Defaults to false.
     * @default false in storybook, true in chromatic
     */
    disableAnimations?: boolean;
    /**
     * The layout of the story. By default, it will add padding to the story.
     * @default "default"
     */
    layout?: "default" | "fullscreen";
    /**
     * Whether to wrap the story in a hopper provider or not.
     * @default true
     */
    enabled?: boolean;
}

const DEFAULT_OPTIONS: Required<HopperPresetOptions> = {
    addLocalesToolbar: true,
    addColorSchemesToolbar: true,
    configureViewports: true,
    preloadFonts: true,
    withDecorator: true
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getAddonOptions(options: any): Required<HopperPresetOptions> {
    return {
        ...DEFAULT_OPTIONS,
        ...options
    };
}

const managerConfig: Partial<StorybookConfig> = {
    previewAnnotations: (config, options) => {
        const addonOptions = getAddonOptions(options);

        return [
            ...(config ?? []),
            // addonOptions.addLocalesToolbar && require.resolve("./locale.js"),
            // addonOptions.addColorSchemesToolbar && require.resolve("./color-scheme.js"),
            // addonOptions.configureViewports && require.resolve("./viewports.js"),
            // addonOptions.withDecorator && require.resolve("./decorator.js")
            addonOptions.addLocalesToolbar && require.resolve("./locale.ts"),
            addonOptions.addColorSchemesToolbar && require.resolve("./color-scheme.ts"),
            addonOptions.configureViewports && require.resolve("./viewports.ts"),
            addonOptions.withDecorator && require.resolve("./decorator.tsx")
        ].filter(x => x !== false);
    },
    // Preload fonts
    previewHead: (head, options) => {
        const addonOptions = getAddonOptions(options);

        if (addonOptions.preloadFonts !== true) {
            return head;
        }

        return `
        ${head}
        <link
            rel="preload"
            href="https://cdn.platform.workleap.com/hopper/fonts/inter/v4/InterVariable.woff2"
            as="font"
            type="font/woff2"
            crossorigin="anonymous"
        />
        <link
            rel="preload"
            href="https://cdn.platform.workleap.com/hopper/fonts/abc-favorit/mono/alternative/ABCFavoritMono-Regular.woff2"
            as="font"
            type="font/woff2"
            crossorigin="anonymous"
        />
        <link
            rel="preload"
            href="https://cdn.platform.workleap.com/hopper/fonts/abc-favorit/alternative/ABCFavoritVariable.woff2"
            as="font"
            type="font/woff2"
            crossorigin="anonymous"
        />
    `;
    }
};

export default managerConfig;

export { allModes } from "./modes.ts";
export { viewports } from "./viewports.ts";

