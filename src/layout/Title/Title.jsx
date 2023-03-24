import clsx from "clsx";
import React from "react";
import s from "./Title.module.scss";

export const Title = ({ children, className }) => {
  return <h1 className={clsx(s.title, className)}>{children}</h1>;
};
