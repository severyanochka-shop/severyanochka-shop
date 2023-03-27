import React from "react";
import s from "./Stars.module.scss";
import emptystar from "../Images/star.svg";
import star from "../Images/starfull.svg";

export const Stars = ({ rating }) => {
  return (
    <div className={s.score_stars}>
      {[1, 2, 3, 4, 5].map((el) => (
        <img key={el} src={rating >= el ? star : emptystar} alt={rating >= el ? "★" : "☆"} />
      ))}
    </div>
  );
};
