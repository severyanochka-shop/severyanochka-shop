import React from "react";
import '../ui/Checkbox/Checkbox.module.scss';
import { parameters } from "./preview";
import { Checkbox } from "../ui/Checkbox/Checkbox";

export default {
  title: "UI",
  component: Checkbox,
  argTypes: {
    background: {
      options: [false, "gray", "red", "green", "orange"],
      control: { type: "select" },
    },
    border: {
      options: [false, "gray", "red", "green", "orange"],
      control: { type: "select" },
    },
    small: { control: "boolean", defaultValue: false },
    medium: { control: "boolean", defaultValue: false },
    large: { control: "boolean", defaultValue: false },
  },
  parameters,
};

const Template = (args) => <Checkbox {...args} />;

export const MyButton = Template.bind({});
MyButton.args = {
  text: "Text",
  background: "gray",
  border: "none",
  small: true,
  medium: false,
  large: false,
};
