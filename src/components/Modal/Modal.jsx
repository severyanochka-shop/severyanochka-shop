import React from "react";
import s from "./Modal.module.scss";

export const Modal = ({ children }) => {
  return (
    <div
      className={s.modal}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {children}
    </div>
  );
};
