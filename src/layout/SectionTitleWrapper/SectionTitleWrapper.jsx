import React from "react";
import s from "./SectionTitleWrapper.module.scss";

export const SectionTitleWrapper = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};
