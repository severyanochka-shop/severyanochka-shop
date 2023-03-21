import React from "react";
import clsx from "clsx";
import s from "./Textfield.module.scss";
import eye from "./eye.svg";
import eyeOff from "./eyeOff.svg";
import search from "./search.svg";

export const Textfield = ({
  className,
  label,
  placeholder,
  type,
  disabled,
  medium,
  large,
  huge,
  handler,
  ...restprops
}) => {


  return (
    <div className="textfield">
      <label
        className={
          !restprops.labelClass
            ? s.textfield__label
            : clsx(s.textfield__label, s.textfield__label_sms)
        }
        htmlFor="input"
      >
        {label}
        <input
          {...restprops.register?.(restprops.name, restprops.rule)}
          type={type}
          name="input"
          id="input"
          onChange={handler}
          maxLength={restprops.maxLength}
          placeholder={placeholder}
          disabled={disabled}
          value={restprops.value}
          className={clsx(s.textfield__input, className, {
            [s.textfield__input_large]: large,
            [s.textfield__input_medium]: medium,
            [s.textfield__input_huge]: huge,
          })}
          {...restprops}
        ></input>
        {(restprops.visible === 0 || type === "password") && restprops.maxLength !== "4" && (
          <a href="#" className={!huge ? s.textfield__password : s.textfield__password_huge}>
            <img src={eye} alt="eye" className="textfield__eye" />
          </a>
        )}
        {restprops.visible === 1 && (
          <a href="#" className={!huge ? s.textfield__password : s.textfield__password_huge}>
            <img src={eyeOff} alt="eyeOff" className="textfield__eye" />
          </a>
        )}
        {placeholder === "Найти товар" && (
          <a href="#" className={s.textfield__password}>
            <img src={search} alt="search" className="textfield__eye" />
          </a>
        )}
      </label>
    </div>
  );
};