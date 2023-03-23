import React from "react";
import { parameters } from "./preview";
import { InputRange as InputRangeComponent } from "../ui/InputRange/InputRange";

const obj = {
  title: "UI",
  component: InputRangeComponent,

  parameters,
};

export default obj;

const Template = (args) => <InputRangeComponent {...args} />;

export const InputRange = Template.bind({});
