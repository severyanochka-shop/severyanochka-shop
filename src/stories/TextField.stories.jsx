import React from "react";
import { parameters } from "./preview";
import { TextField as TextFieldComponent } from "../ui/TextField/TextField";

const obj = {
  title: "UI",
  component: TextFieldComponent,
  argTypes: {
    medium: {
      control: "boolean",
      defaultValue: true,
    },
    large: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    type: {
      options: ["text", "password"],
      control: { type: "select" },
      defaultValue: "text",
    },
  },
  parameters,
};

export default obj;

const Template = (args) => <TextFieldComponent {...args} />;

export const TextField = Template.bind({});
TextField.args = {
  text: "Text",
};
