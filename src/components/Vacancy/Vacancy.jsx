import React from "react";
import s from "./Vacancy.module.scss";
import { Paragraph } from "./Paragraph/Paragraph";
import telephone from "./telephone.svg";

export const Vacancy = ({ post }) => {
  return (
    <div className={s.vacancy}>
      <h3 className={s.title}>{post}</h3>
      <Paragraph
        post="Требования"
        text="Текст про требования текст про требования текст про требования текст про требования текст про требования"
      />
      <Paragraph
        post="Требования"
        text="Текст про требования текст про требования текст про требования текст про требования текст про требования"
      />
      <Paragraph
        post="Требования"
        text="Текст про требования текст про требования текст про требования текст про требования текст про требования"
      />
      <p className={s.text}>Звоните</p>
      <div className={s.wrapper}>
        <img src={telephone} alt="tel" />
        <p className={s.telephone}>+7 904 271 35 90</p>
      </div>
    </div>
  );
};
