import { allModes } from "@internals/hopper-preset-addon";
import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Button } from "./Button.tsx";

const meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        chromatic: {
            modes: {
                "light english": allModes["light english"],
                "dark english": allModes["dark english"]
            }
        }
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
} satisfies Story;
