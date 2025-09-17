import { Breakpoints } from "@hopper-ui/components";
import type { Preview } from "storybook-react-rsbuild";

export interface Viewport {
    name: string;
    styles: {
        height: string;
        width: string;
    };
    type: "desktop" | "mobile" | "tablet";
}

const BreakpointToDeviceType: Record<string, Viewport["type"]> = {
    xs: "mobile",
    sm: "mobile",
    md: "tablet",
    lg: "desktop",
    xl: "desktop"
};

const hopperViewports = (Object.keys(Breakpoints)).reduce((acc, key) => {
    acc[key as keyof typeof Breakpoints] = {
        name: `Breakpoint ${key}`,
        styles: {
            height: "100%",
            width: `${Breakpoints[key as keyof typeof Breakpoints]}px`
        },
        type: BreakpointToDeviceType[key]
    };

    return acc;
}, {} as Record<keyof typeof Breakpoints, Viewport>);

export const viewports: Record<keyof typeof Breakpoints | "base" | "default", Viewport> = {
    base: {
        name: "Smaller than xs",
        styles: {
            height: "100%",
            width: "300px"
        },
        type: "mobile"
    },
    ...hopperViewports,
    default: {
        name: "Fullscreen",
        styles: {
            height: "100%",
            width: "100%"
        },
        type: "desktop"
    }
};

const preview: Preview = {
    parameters: {
        viewport: {
            defaultViewport: "default",
            viewports
        }
    }
};

export default preview;
