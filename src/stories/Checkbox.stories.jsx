import React from "react";
import { parameters } from "./preview";
import { Checkbox as CheckboxComponent } from "../ui/Checkbox/Checkbox";

const obj = {
  title: "UI",
  component: CheckboxComponent,
  argTypes: {
    small: {
      control: "boolean",
      defaultValue: false,
    },
    medium: {
      control: "boolean",
      defaultValue: false,
    },
    large: {
      control: "boolean",
      defaultValue: false,
    },
    extrasmall: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
  parameters,
};

export default obj;

const Template = (args) => <CheckboxComponent {...args} />;

export const Checkbox = Template.bind({});
Checkbox.args = {
  extrasmall: false,
  small: false,
  medium: false,
  large: true,
};
