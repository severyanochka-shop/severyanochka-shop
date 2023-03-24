import React from "react";
import s from "./PersonalData.module.scss";
import data from "./data.json";

export const PersonalData = () => {
  let arr = Object.entries(data);

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {arr.map((el, index) => (
          <li key={index}>{el[1]}</li>
        ))}
      </ul>
    </div>
  );
};
