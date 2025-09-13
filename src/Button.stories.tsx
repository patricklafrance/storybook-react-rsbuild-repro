import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { allModes } from "../.storybook/hopper-addon/modes.ts";
import { Button } from "./Button.tsx";

const meta = {
    title: "Button",
    component: Button,
    parameters: {
        chromatic: {
            modes: {
                "light english": allModes["light english"],
                "dark english": allModes["dark english"]
            }
        },
        hopper: {
            height: 1000
        }
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

