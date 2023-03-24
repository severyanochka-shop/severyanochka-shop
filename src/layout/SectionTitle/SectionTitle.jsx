import clsx from "clsx";
import React from "react";
import s from "./SectionTitle.module.scss";

export const SectionTitle = ({ children, className }) => {
  return <h2 className={clsx(s.title, className)}>{children}</h2>;
};
