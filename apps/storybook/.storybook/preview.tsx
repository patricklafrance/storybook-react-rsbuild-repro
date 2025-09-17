import "./index.css";

import { initialize as initializeMsw, mswLoader } from "msw-storybook-addon";
import { Suspense } from "react";
import type { Preview } from "storybook-react-rsbuild";

initializeMsw({
    onUnhandledRequest: "bypass"
});

const preview: Preview = {
    decorators: [
        Story => {
            return (
                <Suspense fallback="UNHANDLED SUSPENSE BOUNDARY, should be handled in your components...">
                    <Story />
                </Suspense>
            );
        }
    ],
    loaders: [mswLoader],
    parameters:{
        options: {
            storySort: {
                method: "alphabetical",
                order: [
                    "Components",
                    "*",
                    ["Widget", "Components", "Elements", "Userflows"]
                ]
            }
        }
    }

};

export default preview;
