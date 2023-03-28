import React from "react";
import s from "./ReviewItem.module.scss";
import user from "./Images/user.svg";
import { Stars } from "../Starts/Stars";

export const ReviewItem = (props) => {
  const { name, date, text, rating } = props;
  return (
    <div className={s.review}>
      <div style={{ display: "flex" }}>
        <img className={s.review__pic} src={user} alt="O" />
        <p className={s.review__name}>{name}</p>
      </div>
      <div style={{ display: "flex" }}>
        <div className={s.review__stars}>
          <Stars rating={rating} />
        </div>
        <p className={s.review__date}>{date}</p>
      </div>
      <p className={s.review__text}>{text}</p>
    </div>
  );
};
