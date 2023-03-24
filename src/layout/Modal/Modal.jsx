import React from "react";
import s from "./Modal.module.scss";
import { useLayoutEffect } from "react";

export const Modal = ({ children }) => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }, []);

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
