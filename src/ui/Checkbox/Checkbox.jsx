import React from 'react'
import clsx from "clsx";
import s from './Checkbox.module.scss'


export const Checkbox = ({ className, value, small, medium, large, disabled }) => {
  return (
    <input
      type="checkbox"
      className={clsx(s.checkbox, className, {
        [s.checkbox__large]: large,
        [s.checkbox__medium]: medium,
        [s.checkbox__small]: small,
        [s.checkbox__checked]: value,
        [s.checkbox__disabled]: disabled,
      })}
    />
  );
};
