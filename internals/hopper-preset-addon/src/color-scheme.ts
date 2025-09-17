import type { Preview } from "storybook-react-rsbuild";

export const colorSchemes = {
    light: {
        value: "light",
        title: "Light"
    },
    dark: {
        value: "dark",
        title: "Dark"
    }
} as const;


const preview: Preview = {
    globalTypes: {
        colorScheme: {
            description: "Hopper Color Scheme",
            defaultValue: "light",
            toolbar: {
                title: "Color Scheme",
                icon: "circlehollow",
                items: Object.values(colorSchemes).map(colorScheme => ({
                    value: colorScheme.value,
                    title: colorScheme.title,
                    right: colorScheme.value
                })),
                dynamicTitle: true
            }
        }
    }
};

export default preview;
