import React, { useState } from "react";
import { v1 } from "uuid";
import s from "./AddReview.module.scss";
import fullstar from "../Images/starfull.svg";
import emptystar from "../Images/star.svg";

export const AddReview = ({ review, setReview }) => {
  const [value, setValue] = useState("");
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(0);

  const saveReview = () => {
    if (value) {
      setReview([
        ...review,
        {
          id: v1(),
          name: "UserName",
          date: new Date().toLocaleDateString(),
          text: value,
          score: score,
        },
      ]);
      setValue("");
      setScore(0);
      setHover(0);
    }
  };

  const handleMouseOver = (el) => {
    setHover(el);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  const handleClick = (el) => {
    setScore(el);
  };

  return (
    <div className={s.yourscore}>
      <div className={s.yourscore__box}>
        <p className={s.yourscore__subtitle}>Ваша оценка</p>
        <div className={s.yourscore__stars}>
          {[1, 2, 3, 4, 5].map((el) => (
            <div
              key={el}
              onMouseOver={() => handleMouseOver(el)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(el)}
              style={{
                backgroundImage:
                  el <= (hover || score) ? `url("${fullstar}")` : `url(${emptystar})`,
              }}
              className={s.divstar}
            ></div>
          ))}
        </div>
      </div>
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className={s.yourscore__text}
        placeholder="Отзыв"
        cols="30"
        rows="8"
      ></textarea>
      <button onClick={saveReview} className={s.yourscore_btn}>
        Отправить отзыв
      </button>
    </div>
  );
};
