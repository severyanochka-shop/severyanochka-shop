import React, { useState } from "react";
import { v1 } from "uuid";
import s from "./AddReview.module.scss";

export const AddReview = ({ review, setReview }) => {
  const [value, setValue] = useState("");
  const [score, setScore] = useState("");

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
      setScore("");
    }
  };
  return (
    <div className={s.yourscore}>
      <div style={{ display: "flex" }}>
        <p className={s.yourscore__subtitle}>Ваша оценка</p>
        <div className={s.yourscore__stars}>
          <div
            onClick={() => {
              setScore("1");
            }}
            className={s.divstar}
          ></div>
          <div
            onClick={() => {
              setScore("2");
            }}
            className={s.divstar}
          ></div>
          <div
            onClick={() => {
              setScore("3");
            }}
            className={s.divstar}
          ></div>
          <div
            onClick={() => {
              setScore("4");
            }}
            className={s.divstar}
          ></div>
          <div
            onClick={() => {
              setScore("5");
            }}
            className={s.divstar}
          ></div>
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
      <button onClick={saveReview}>Отправить отзыв</button>
    </div>
  );
};
