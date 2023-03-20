import React from "react";
import s from "./Stars.module.scss";
import emptystar from "../Images/star.svg";
import star from "../Images/starfull.svg";

export const Stars = ({ type }) => {
  const scoreFive = (
    <div className={s.score_stars}>
      <img src={star} alt="★" />
      <img src={star} alt="★" />
      <img src={star} alt="★" />
      <img src={star} alt="★" />
      <img src={star} alt="★" />
    </div>
  );

  const scoreFour = (
    <div className={s.score_stars}>
      <img src={star} alt="★" />
      <img src={star} alt="★" />
      <img src={star} alt="★" />
      <img src={star} alt="★" />
      <img src={emptystar} alt="☆" />
    </div>
  );

  const scoreThree = (
    <div className={s.score_stars}>
      <img src={star} alt="★" />
      <img src={star} alt="★" />
      <img src={star} alt="★" />
      <img src={emptystar} alt="☆" />
      <img src={emptystar} alt="☆" />
    </div>
  );

  const scoreTwo = (
    <div className={s.score_stars}>
      <img src={star} alt="★" />
      <img src={star} alt="★" />
      <img src={emptystar} alt="☆" />
      <img src={emptystar} alt="☆" />
      <img src={emptystar} alt="☆" />
    </div>
  );

  const scoreOne = (
    <div className={s.score_stars}>
      <img src={star} alt="★" />
      <img src={emptystar} alt="☆" />
      <img src={emptystar} alt="☆" />
      <img src={emptystar} alt="☆" />
      <img src={emptystar} alt="☆" />
    </div>
  );

  const scoreZero = (
    <div className={s.score_stars}>
      <img src={emptystar} alt="☆" />
      <img src={emptystar} alt="☆" />
      <img src={emptystar} alt="☆" />
      <img src={emptystar} alt="☆" />
      <img src={emptystar} alt="☆" />
    </div>
  );

  if (type === "1") return scoreOne;
  if (type === "2") return scoreTwo;
  if (type === "3") return scoreThree;
  if (type === "4") return scoreFour;
  if (type === "5") return scoreFive;
  if (type === "0") return scoreZero;
};
