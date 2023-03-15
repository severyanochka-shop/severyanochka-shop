import { Link } from "react-router-dom";
import React from "react";
import s from "./PictoButton.module.scss";

export const PictoButton = ({ text, img, link }) => {
  return (
    <>
      <Link to={link}>
        <button className={s.button}>
          <img src={img} alt="" className={s.button__image} />
          <span className={s.button__text}>{text}</span>
        </button>
      </Link>
    </>
  );
};
