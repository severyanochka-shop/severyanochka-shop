import clsx from "clsx";
import React from "react";
import importantWhite from "./images/important-white.svg";
import importantBlack from "./images/important-black.svg";
import s from "./Tooltips.module.scss";

export const Tooltips = ({ red, gray, important, className, text }) => {
  return (
    <div
      className={clsx(s.label, className, {
        [s.red]: red,
        [s.gray]: gray,
      })}
    >
      {important &&
        (red ? (
          <img className={s.img} src={importantWhite} alt="!" />
        ) : (
          <img className={s.img} src={importantBlack} alt="!" />
        ))}
      <p className={s.text}>{text}</p>
    </div>
  );
};
