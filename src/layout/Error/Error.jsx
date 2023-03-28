import React from "react";
import s from "./Error.module.scss";

export const Error = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.text}>Ошбика! Попробуйте еще раз</p>
    </div>
  );
};
