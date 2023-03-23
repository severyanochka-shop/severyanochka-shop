import React from "react";
import { parameters } from "./preview";
import { Discount as DiscountComponent } from "../ui/Discount/Discount";

const obj = {
  title: "UI",
  component: DiscountComponent,
  argTypes: {
    small: {
      control: "boolean",
      defaultValue: false,
    },
    large: {
      control: "boolean",
      defaultValue: false,
    },
    orange: {
      control: "boolean",
      defaultValue: false,
    },
    gray: {
      control: "boolean",
      defaultValue: false,
    },
    red: {
      control: "boolean",
      defaultValue: false,
    },
    lightGreen: {
      control: "boolean",
      defaultValue: false,
    },
    darkGreen: {
      control: "boolean",
      defaultValue: false,
    },
  },
  parameters,
};

export default obj;

const Template = (args) => <DiscountComponent {...args} />;

export const Discount = Template.bind({});
Discount.args = {
  text: "text",
};
