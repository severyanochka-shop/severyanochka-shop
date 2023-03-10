import React from "react";
import clsx from "clsx";
import s from "./Button.module.scss";

export const Button = (props) => {
  
  const {
    className,
    children,
    background,
    small,
    medium,
    large,
    border,
    disabled,
    handler,
  } = props;

  const innerClassName = clsx(s.button, className, {
    [s.button__large]: large,
    [s.button__medium]: medium,
    [s.button__small]: small,
    [s.button__gray]: background === "gray",
    [s.button__green]: background === "green",
    [s.button__red]: background === "red",
    [s.button__orange]: background === "orange",
    [s.button__gray_disabled]: background === "gray" && disabled,
    [s.button__green_disabled]: background === "green" && disabled,
    [s.button__red_disabled]: background === "red" && disabled,
    [s.button__orange_disabled]: background === "orange" && disabled,
    [s.border__red]: border === "red",
    [s.border__green]: border === "green",
    [s.border__gray]: border === "gray",
    [s.border__orange_disabled]: border === "orange" && disabled,
    [s.border__red_disabled]: border === "red" && disabled,
    [s.border__green_disabled]: border === "green" && disabled,
    [s.border__gray_disabled]: border === "gray" && disabled,
    [s.border__orange_disabled]: border === "orange" && disabled,
  });

  return (
    <button onClick={handler} className={innerClassName}>
      {children}
    </button>
  );
};
