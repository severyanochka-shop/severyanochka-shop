import React from 'react'
import clsx from "clsx";
import cl from './Checkbox.module.scss'


export const Checkbox = ({ large, medium, small, className, disabled,unstated}) => {
  const innerClassName = clsx(cl.new_status, className, {
    [cl.new_status__large]: large,
    [cl.new_status__medium]: medium,
    [cl.new_status__small]: small,
    [cl.another_status__large]: large,
    [cl.another_status__medium]: medium,
    [cl.another_status]: unstated,
  });
  return (
    <label className={cl.label}>
      <input className={cl.status} type="checkbox" disabled={disabled} />
      <span className={innerClassName}></span>
    </label>
  );
};
