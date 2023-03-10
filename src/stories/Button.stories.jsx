import React from "react";
import "../ui/Button/Button.module.scss";
import { parameters } from "./preview";

import { Button as ButtonComponent } from "../ui/Button/Button";

const obj = {
  title: "UI",
  component: ButtonComponent,
  argTypes: {
    background: {
      options: [false, "gray", "red", "green", "orange"],
      control: { type: "select" },
    },
    border: { options: [false, "gray", "red", "green", "orange"], control: { type: "select" } },
    small: { control: "boolean", defaultValue: false },
    medium: { control: "boolean", defaultValue: false },
    large: { control: "boolean", defaultValue: false },
  },
  parameters,
};

export default obj;

const Template = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
Button.args = {
  children: "Text",
  background: "gray",
  border: "none",
  small: true,
  medium: false,
  large: false,
};
