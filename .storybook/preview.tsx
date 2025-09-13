import "../src/index.css";

import { Suspense } from "react";
import type { Preview } from "storybook-react-rsbuild";

const preview: Preview = {
    decorators: [
        Story => {
            return (
                // <HopperProvider>
                //     <Suspense fallback="UNHANDLED SUSPENSE BOUNDARY, should be handled in your components...">
                //         <Story />
                //     </Suspense>
                // </HopperProvider>
                <Suspense fallback="UNHANDLED SUSPENSE BOUNDARY, should be handled in your components...">
                    <Story />
                </Suspense>
            );
        }
    ]
};

export default preview;
