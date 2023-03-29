import React from "react";
import { Button } from "../../../ui/Button/Button";
import s from "./FilterButton.module.scss";
import whiteCross from "./assets/white-cross.svg";
import blackCross from "./assets/black-cross.svg";

export const FilterButton = ({ color, text, onClick }) => {
  return (
    <Button small background={color} className={s.button}>
      <div className={s.button__wrapper}>
        <p className={s.button__text}>{text}</p>
        <button className={s.button__cross} onClick={onClick}>
          <img src={color === "green" ? whiteCross : blackCross} alt="☓" />
        </button>
      </div>
    </Button>
  );
};
