import React from "react";
import "../ui/Checkbox/Checkbox.module.scss";
import { parameters } from "./preview";
import { Toggle as ToggleComponent } from "../ui/Toggle/Toggle";

const obj = {
  title: "UI",
  component: ToggleComponent,
  argTypes: {
    S: { control: "boolean", defaultValue: false },
    M: { control: "boolean", defaultValue: false },
    L: { control: "boolean", defaultValue: false },
    XL: { control: "boolean", defaultValue: false },
    disable: { control: "boolean", defaultValue: false },
  },
  parameters,
};

export default obj;

const Template = (args) => <ToggleComponent {...args} />;

export const Toggle = Template.bind({});
Toggle.args = {
  S: false,
  M: false,
  L: false,
  XL: true,
};
