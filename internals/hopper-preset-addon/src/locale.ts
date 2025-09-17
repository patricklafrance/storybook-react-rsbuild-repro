import type { Preview } from "storybook-react-rsbuild";

export const locales = {
    english: {
        value: "en-US",
        title: "English"
    },
    french: {
        value: "fr-CA",
        title: "Français"
    }
} as const;

const preview: Preview = {
    globalTypes: {
        locale: {
            description: "Internationalization locale",
            defaultValue: "en-US",
            toolbar: {
                title: "Locale",
                icon: "globe",
                items: Object.values(locales).map(locale => ({
                    value: locale.value,
                    title: locale.title,
                    right: locale.value
                })),
                dynamicTitle: true
            }
        }
    }
};

export default preview;
