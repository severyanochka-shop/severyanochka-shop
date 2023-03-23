import React from "react";
import { parameters } from "./preview";
import { Counter as CounterComponent } from "../ui/Counter/Counter";

const obj = {
  title: "UI",
  component: CounterComponent,
  parameters,
};

export default obj;

const Template = (args) => <CounterComponent {...args} />;

export const Counter = Template.bind({});
