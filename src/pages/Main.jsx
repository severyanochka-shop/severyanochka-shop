import React from "react";
import { Select } from "../ui/Select/Select";

export const Main = () => {
  const options = [
    { value: "chocolate", label: "Chocolate11" },
    { value: "strawberry", label: "Strawberry22" },
    { value: "vanilla", label: "Vanilla33" },
  ];
  return (
    <div style={{ margin: 20 }} className={"container"}>
      <h1>СЕВЕРЯНОЧКА</h1>
      <div style={{ marginBottom: 10 }}>
        <Select options={options} />
      </div>
      <div style={{ marginBottom: 10 }}>
        <Select options={options} disabled />
      </div>
      <div style={{ marginBottom: 10 }}>
        <Select options={options} isMulti />
      </div>
      <div style={{ marginBottom: 10 }}>
        <Select options={options} isMulti disabled />
      </div>
      <div style={{ marginBottom: 10 }}>
        <Select options={options} label="Label" />
      </div>
      <div style={{ marginBottom: 10 }}>
        <Select options={options} label="Label" disabled />
      </div>
      <div style={{ marginBottom: 10 }}>
        <Select options={options} label="Label" isMulti />
      </div>
      <div style={{ marginBottom: 10 }}>
        <Select options={options} label="Label" isMulti disabled />
      </div>
    </div>
  );
};
