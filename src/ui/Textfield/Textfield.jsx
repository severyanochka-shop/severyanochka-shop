import React from "react";
import clsx from "clsx";
import s from "./TextField.module.scss";
import eye from "./eye.svg";

export const TextField = ({ className, text, type, disabled, medium, large }) => {
  return (
    <div className="textfield">
      <label className={s.textfield__label} htmlFor="input">
        Label
        <input
          type={type}
          name="input"
          id="input"
          placeholder={text}
          disabled={disabled}
          className={clsx(s.textfield__input, className, {
            [s.textfield__input_large]: large,
            [s.textfield__input_medium]: medium,
          })}
        ></input>
        {type === "password" && (
          <a href="#" className={s.textfield__password}>
            <img src={eye} alt="eye" width="24" height="24" className="password__img" />
          </a>
        )}
      </label>
    </div>
  );
};
