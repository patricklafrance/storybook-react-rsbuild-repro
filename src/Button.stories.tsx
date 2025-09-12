import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Button } from "./Button.tsx";

const meta = {
    title: "Button",
    component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

