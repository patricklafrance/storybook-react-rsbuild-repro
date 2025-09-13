import { colorSchemes } from "./color-scheme.ts";
import { locales } from "./locale.ts";
import { viewports } from "./viewports.ts";

type ViewPortsModes = keyof typeof viewports; // "xs" | "sm" | "md" | "lg" | "xl" | "base"
type ColorSchemeModes = keyof typeof colorSchemes; // "light" | "dark"
type LocaleModes = keyof typeof locales; // "english" | "french"

// In the modes, we don't require the default viewport, so we can use the other viewports.
type ModeCombinations = `${ColorSchemeModes} ${LocaleModes}` | `${ColorSchemeModes} ${LocaleModes} ${Exclude<ViewPortsModes, "default">}`;

type LocaleValues = (typeof locales)[LocaleModes]["value"];
type ColorSchemeValues = (typeof colorSchemes)[ColorSchemeModes]["value"];
type ViewPortValues = keyof typeof viewports;
interface ModeValue {
    viewport: ViewPortValues;
    colorScheme: ColorSchemeValues;
    locale: LocaleValues;
}
type Modes = Record<ModeCombinations, ModeValue>;

function getAllModes() {
    let modes = {} as Modes;

    for (const colorScheme in colorSchemes) {
        for (const locale in locales) {
            for (const viewport in viewports) {
                let name = `${colorScheme} ${locale}` as ModeCombinations;

                if (viewport !== "default") {
                    name = `${colorScheme} ${locale} ${viewport}` as ModeCombinations;
                }

                modes = {
                    ...modes,
                    [name]: {
                        viewport: viewport as ViewPortValues,
                        colorScheme: colorSchemes[colorScheme as ColorSchemeModes].value,
                        locale: locales[locale as LocaleModes].value
                    } satisfies ModeValue
                };
            }
        }
    }

    return modes;
}

export const allModes = getAllModes();

