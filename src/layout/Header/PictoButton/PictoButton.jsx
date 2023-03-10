import { Link } from "react-router-dom";
import React from "react";
import clsx from "clsx";
import s from "./PictoButton.module.scss";

export const PictoButton = ({ text, img, link }) => {
  return (
    <>
      <Link to={link}>
        <button className={s.button}>
          <img src={img} alt="" className={s.pictogram} />
          <span>{text}</span>
        </button>
      </Link>{" "}
    </>
  );
};
