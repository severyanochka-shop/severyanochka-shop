import clsx from "clsx";
import React from "react";
import s from "./Discount.module.scss";

export const Discount = ({
  small,
  large,
  orange,
  gray,
  red,
  lightGreen,
  darkGreen,
  className,
  text,
}) => {
  return (
    <div
      className={clsx(s.discount, className, {
        [s.small]: small,
        [s.large]: large,
        [s.orange]: orange,
        [s.gray]: gray,
        [s.red]: red,
        [s.lightGreen]: lightGreen,
        [s.darkGreen]: darkGreen,
      })}
    >
      <p>{text}</p>
    </div>
  );
};
