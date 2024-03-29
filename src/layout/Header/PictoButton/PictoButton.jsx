import React from "react";
import s from "./PictoButton.module.scss";

export const PictoButton = ({
  text,
  img,
  img_hover,
  onButtonEnterHandler,
  onButtonLeaveHandler,
}) => {
  return (
    <>
      <button
        className={s.button}
        onMouseEnter={onButtonEnterHandler}
        onMouseLeave={onButtonLeaveHandler}
      >
        <img src={img} alt="" className={s.button__image} />
        <img src={img_hover} alt="" className={s.button__image_hover} />
        <span className={s.button__text}>{text}</span>
      </button>
    </>
  );
};
