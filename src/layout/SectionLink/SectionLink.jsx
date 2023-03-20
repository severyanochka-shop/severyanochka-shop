import React from "react";
import { Link } from "react-router-dom";
import s from "./SectionLink.module.scss";

export const SectionLink = ({ to, children }) => {
  return (
    <Link className={s.link} to={to}>
      {children}
    </Link>
  );
};
