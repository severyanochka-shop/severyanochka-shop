import React from "react";
import { parameters } from "./preview";
import { Tooltips as TooltipsComponent } from "../ui/Tooltips/Tooltips";

const obj = {
  title: "UI",
  component: TooltipsComponent,
  argTypes: {
    important: {
      control: "boolean",
      defaultValue: false,
    },
    red: {
      control: "boolean",
      defaultValue: true,
    },
    gray: {
      control: "boolean",
      defaultValue: false,
    },
  },
  parameters,
};

export default obj;

const Template = (args) => <TooltipsComponent {...args} />;

export const Tooltips = Template.bind({});
Tooltips.args = {
  text: "Text",
};
