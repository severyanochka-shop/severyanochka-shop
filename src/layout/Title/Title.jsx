import React from "react";
import s from "./Title.module.scss";

export const Title = ({ children }) => {
  return <h1 className={s.title}>{children}</h1>;
};
