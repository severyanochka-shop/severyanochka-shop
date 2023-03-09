import React from 'react'
import clsx from "clsx";
import cl from './Checkbox.module.css'


export const Checkbox = () => {
  // const innerClassName = clsx(s.checkbox, className, {
        // [s.checkbox__large]: large,
        // [s.checkbox__medium]: medium,
        // [s.checkbox__small]: small,
        // [s.checkbox__checked]: value,
        // [s.checkbox__disabled]: disabled,
      // });
  return (
    <label className={cl.label}>
      <input
        className={cl.status}
        type="checkbox"
      />
      <span className={cl.new_status}></span>
    </label>
  );
};
