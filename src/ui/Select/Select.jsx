// import React, { useState } from "react";
import ReactSelect from "react-select";
// import clsx from "clsx";
// import s from "./Select.module.scss";

// export const Select = ({ options, handler, className }) => {
//   const [selectedOption, setSelectedOption] = useState([]);
//   console.log(selectedOption);
//   return (
//     <ReactSelect
//       isMulti
//       defaultValue={["11111", "22222222", 333333333]}
//       onChange={(e) => setSelectedOption([...selectedOption, e.target.value])}
//       // className={clsx(s.select, className)}
//       options={options}
//     />
//   );
// };

import React, { useState } from "react";

const colourOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, backgroundColor: "#FF6633" } : base;
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed ? { ...base, fontWeight: "bold", color: "white", paddingRight: 6 } : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  },
};

const orderOptions = (values) => {
  return values.filter((v) => v.isFixed).concat(values.filter((v) => !v.isFixed));
};

export const Select = () => {
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
        newValue = colourOptions.filter((v) => v.isFixed);
        break;
    }

    setValue(orderOptions(newValue));
  };

  return (
    <ReactSelect
      value={value}
      isMulti
      styles={styles}
      isClearable={value.some((v) => !v.isFixed)}
      name="colors"
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={onChange}
      options={colourOptions}
    />
  );
};
