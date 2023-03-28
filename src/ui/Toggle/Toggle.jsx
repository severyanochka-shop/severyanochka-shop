import React from "react";
import "./Toggle.scss";
import clsx from "clsx";

export const Toggle = ({ L, XL, M, S, disable, handler, checked }) => {
  const innerClassNameToggle = clsx("toggle-switch", {
    "toggle-switch__XL": XL,
    "toggle-switch__L": L,
    "toggle-switch__M": M,
    "toggle-switch__S": S,
  });

  const innerClassNameInner = clsx(
    !checked
      ? ("inner",
        {
          inner__XL: XL,
          inner__L: L,
          inner__M: M,
          inner__S: S,

          inner__XL__disable: disable === true,
        })
      : ("inner-checked",
        {
          inner__checked__XL: XL,
          inner__checked__L: L,
          inner__checked__M: M,
          inner__checked__S: S,
          inner__checked__disable: disable === true,
        }),
  );

  const innerClassNameSwitch = clsx(!checked ? "switch" : "switch__checked", {
    switch__XL: XL,
    switch__L: L,
    switch__M: M,
    switch__S: S,

    switch__disable: disable === true,
    switch__checked__disable: disable === true,
  });

  return (
    <div className={innerClassNameToggle} onChange={handler}>
      <label className="label">
        <input type="checkbox" className="checkbox" />
        <span className={innerClassNameInner} />
        <span className={innerClassNameSwitch} />
      </label>
    </div>
  );
};
