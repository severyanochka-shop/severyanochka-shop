import clsx from "clsx";
import React from "react";
import s from "./Radio.module.scss";

export const Radio = (props) => {
  const { XL, L, M, S, radioName, handler, radioValue, checked, disabled } = props;

  const innerClassName = clsx(s.radio, {
    [s.radio__XL]: XL,
    [s.radio__L]: L,
    [s.radio__M]: M,
    [s.radio__S]: S,
    [s.radio__XL_checked]: XL && checked,
    [s.radio__L_checked]: L && checked,
    [s.radio__M_checked]: M && checked,
    [s.radio__S_checked]: S && checked,
    [s.radio__XL_checked_dis]: XL && checked && disabled,
    [s.radio__L_checked_dis]: L && checked && disabled,
    [s.radio__M_checked_dis]: M && checked && disabled,
    [s.radio__S_checked_dis]: S && checked && disabled,
    [s.radio_disabled]: disabled,
  });

  return (
    <label className={innerClassName}>
      <input
        checked={checked}
        value={radioValue}
        onChange={(evt) => !disabled && handler(evt.target.value)}
        className={clsx(s.radio__input)}
        name={radioName}
        type="radio"
      />
    </label>
  );
};
