import React from "react";
import { Button } from "../ui/Button/Button";
import { Select } from "../ui/Select/Select";

export const Main = () => {
  const options = [
    { value: "chocolate", label: "Chocolate11" },
    { value: "strawberry", label: "Strawberry22" },
    { value: "vanilla", label: "Vanilla33" },
  ];
  return (
    <div className={"container"}>
      <h1>СЕВЕРЯНОЧКА</h1>
      <Select options={options} />
    </div>
  );
};
