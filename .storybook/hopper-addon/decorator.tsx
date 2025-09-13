import { HopperProvider } from "@hopper-ui/components";
import isChromatic from "chromatic/isChromatic";
import type { ReactNode } from "react";
import type { Preview } from "storybook-react-rsbuild";
import { makeDecorator } from "storybook/preview-api";
import { DisableAnimations } from "./DisableAnimations.tsx";
import type { HopperParameters } from "./index.ts";

export const withHopperProvider = makeDecorator({
    name: "withHopperProvider",
    parameterName: "hopper",
    wrapper: (getStory, context, settings) => {
        // Hopper: on stories or meta.
        const parameters = settings.parameters as HopperParameters;
        // What the user picked in the toolbar.
        const globals = context.globals;

        if (parameters.enabled === false) {
            return getStory(context);
        }

        const parameterDisableAnimations = parameters.disableAnimations;
        const layout = parameters.layout ?? "default";

        let disableAnimations = parameterDisableAnimations ?? false;

        if (isChromatic()) {
            disableAnimations = true;
        }

        const height = parameters.height;

        return (
            <DisableAnimations disableAnimations={disableAnimations}>
                <HopperProvider
                    colorScheme={globals.colorScheme}
                    locale={globals.locale}
                    backgroundColor="neutral"
                    color="neutral"
                    fontWeight="body-md"
                    lineHeight="body-md"
                    fontFamily="body-md"
                    fontSize="body-md"
                    padding={layout === "default" ? "core_160" : "core_0"}
                    UNSAFE_height={height ? `${height}px` : undefined}
                >
                    {getStory(context) as ReactNode}
                </HopperProvider>
            </DisableAnimations>
        );
    }
});

const preview: Preview = {
    decorators: [withHopperProvider],
    parameters: {
        hopper: {
            disableAnimations: false
        },
        layout: "fullscreen"
    }
};

export default preview;
