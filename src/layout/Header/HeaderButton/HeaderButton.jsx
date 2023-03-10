import React from "react";
import clsx from "clsx";
import s from "./HeaderButton.module.scss";

export const HeaderButton = ({ className, children, background, handler }) => {
  const innerClassName = clsx(s.button, className, {
    [s.button__green]: background === "green",
    [s.button__orange]: background === "orange",
  });

  return (
    <button onClick={handler} className={innerClassName}>
      {children}
    </button>
  );
};
