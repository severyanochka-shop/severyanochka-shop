import React from "react";
import "./Toggle.scss";
import clsx from "clsx";

export const Toggle = ({ label, L, XL, checked, desable }) => {
  console.log(checked);

  const innerClassName = clsx("toggle-switch", {
    "toggle-switch__XL": XL,
    "toggle-switch__L": L,
  });

  // const innerClassNameInner = clsx(checked == false? "inner__noCheck": "inner__checked", {
  //   "inner__XL": XL,
  //   "inner__L": L,
  // })

  let innerClassNameInner = "";

  if (checked == true) {
    innerClassNameInner = clsx("inner__checked", {
      inner__checked__XL: XL,
      inner__checked__L: L,
    });
  } else {
    innerClassNameInner = clsx("inner", {
      inner__XL: XL,
      inner__L: L,
    });

  }

  const innerClassNameSwitch = clsx(
    checked == false ? "switch" : "switch__checked",
    {
      switch__XL: XL,
      switch__L: L,
    }
  );

  // let innerClassNameSwitch = ''

  // if (check===true)
  //  innerClassNameSwitch = clsx("switch", {
  //   "switch__XL": XL,
  //   "switch__L": L,
  // })

  return (
    // <div className="container">
    //   {label}{"agagsgsg"}

    // <div className={"toggle-switch"}>
    <div className={innerClassName}>
      <input
        checked={true}
        type="checkbox"
        className="checkbox"
        name={label}
        id={label}
        onChange={() => {}}
        // checked
      />
      <label className="label" htmlFor={label}>
        <span className={innerClassNameInner} />
        <span className={innerClassNameSwitch} />
      </label>
    </div>
    // </div>
  );
};

// import React from "react";
// import "./Toggle.scss";

// const ToggleSwitch = ({ label }) => {
//   return (
//     <div className="container">
//       {label}{" "}
//       <div className="toggle-switch">
//         <input type="checkbox" className="checkbox"
//             name={label} id={label} checked/>
//         <label className="label" htmlFor={label}>
//           <span className="inner" />
//           <span className="switch" />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default ToggleSwitch;
