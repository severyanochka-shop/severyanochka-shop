import clsx from "clsx";
import React from "react";
import s from "./SectionTitleWrapper.module.scss";

export const SectionTitleWrapper = ({ children, className }) => {
  return <div className={clsx(s.wrapper, className)}>{children}</div>;
};
