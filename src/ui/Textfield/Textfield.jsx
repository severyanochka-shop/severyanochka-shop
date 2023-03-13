import React from 'react'
import clsx from "clsx";
import s from "./Textfield.module.scss";
import eye from './eye.svg'

export const Textfield = ({
  className,
  placeholder,
  type,
  disabled,
  medium,
  large,
}) => {
  return (
    <div className="textfield">
      <label className={s.textfield__label} htmlFor="input">
        Label
        <input
          type={type}
          name="input"
          id="input"
          placeholder={placeholder}
          disabled={disabled}
          className={clsx(s.textfield__input, className, {
            [s.textfield__input_large]: large,
            [s.textfield__input_medium]: medium,
          })}
        ></input>
        {type === "password" && (
          <a href="#" className={s.textfield__password}>
            <img src={eye} alt="eye" className="textfield__eye" />
          </a>
        )}
      </label>
    </div>
  );
};

