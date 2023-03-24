import React from "react";
import s from "./Stars.module.scss";
import emptystar from "../Images/star.svg";
import star from "../Images/starfull.svg";

export const Stars = ({ type }) => {
  return (
    <div className={s.score_stars}>
      {[1, 2, 3, 4, 5].map((el) => (
        <img key={el} src={type >= el ? star : emptystar} alt={type >= el ? "★" : "☆"} />
      ))}
    </div>
  );
};
