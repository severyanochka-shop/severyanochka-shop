import React from "react";
import s from "./Stars.module.scss";
import emptystar from "../Images/star.svg";
import star from "../Images/starfull.svg";

export const Stars = ({ type }) => {
  return (
    <div className={s.score_stars}>
      {type >= 1 ? <img src={star} alt="★" /> : <img src={emptystar} alt="☆" />}
      {type >= 2 ? <img src={star} alt="★" /> : <img src={emptystar} alt="☆" />}
      {type >= 3 ? <img src={star} alt="★" /> : <img src={emptystar} alt="☆" />}
      {type >= 4 ? <img src={star} alt="★" /> : <img src={emptystar} alt="☆" />}
      {type >= 5 ? <img src={star} alt="★" /> : <img src={emptystar} alt="☆" />}
    </div>
  );
};
