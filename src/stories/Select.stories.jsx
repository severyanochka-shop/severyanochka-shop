import React from "react";
import "../ui/Button/Button.module.scss";
import { parameters } from "./preview";

import { Select as SelectComponent } from "../ui/Select/Select";

const obj = {
  title: "UI",
  component: SelectComponent,
  argTypes: {
    disabled: { control: "boolean", defaultValue: false },
    isMulti: { control: "boolean", defaultValue: false },
  },
  parameters,
};

export default obj;

const Template = (args) => <SelectComponent {...args} />;

export const Select = Template.bind({});
Select.args = {
  label: "123",
  options: [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ],
};
