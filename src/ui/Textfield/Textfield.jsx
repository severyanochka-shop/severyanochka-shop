import React from "react";
import clsx from "clsx";
import s from "./Textfield.module.scss";
import eye from "./eye.svg";
import search from "./search.svg";

export const Textfield = ({ className, label, placeholder, type, disabled, medium, large }) => {
  return (
    <div className="textfield">
      <label className={s.textfield__label} htmlFor="input">
        {label}
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
        {placeholder === "Найти товар" && (
          <a href="#" className={s.textfield__password}>
            <img src={search} alt="search" className="textfield__eye" />
          </a>
        )}
      </label>
    </div>
  );
};
