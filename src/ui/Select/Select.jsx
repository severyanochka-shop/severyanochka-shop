import React, { useState } from "react";
import ReactSelect from "react-select";
// import clsx from "clsx";
import s from "./Select.module.scss";

const styles = {
  multiValue: (base, state) => {
    return !state.data.isFixed ? { ...base, backgroundColor: "#FF6633", color: "#FFFFFF" } : base;
  },
  multiValueLabel: (base, state) => {
    return !state.data.isFixed ? { ...base, color: "white", paddingRight: 6 } : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  },
};

const orderOptions = (values) => {
  return values.filter((v) => v.isFixed).concat(values.filter((v) => !v.isFixed));
};

export const Select = ({ options }) => {
  const [value, setValue] = useState([]);

  const onChange = (newValue, actionMeta) => {
    switch (actionMeta.action) {
      case "remove-value":
      case "pop-value":
        if (actionMeta.removedValue.isFixed) {
          return;
        }
        break;
      case "clear":
        newValue = options.filter((v) => v.isFixed);
        break;
      default:
        break;
    }

    setValue(orderOptions(newValue));
  };

  console.log(value);

  return <ReactSelect value={value} isMulti styles={styles} onChange={onChange} options={options} />;
};
