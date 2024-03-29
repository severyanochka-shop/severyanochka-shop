import React from "react";
import clsx from "clsx";
import s from "./HeaderButton.module.scss";

export const HeaderButton = ({
  className,
  children,
  background,
  onButtonEnterHandler,
  onButtonLeaveHandler,
  onClick,
}) => {
  const innerClassName = clsx(s.button, className, {
    [s.button__green]: background === "green",
    [s.button__orange]: background === "orange",
  });

  return (
    <button
      onMouseEnter={onButtonEnterHandler}
      onMouseLeave={onButtonLeaveHandler}
      onClick={onClick}
      className={innerClassName}
    >
      {children}
    </button>
  );
};
