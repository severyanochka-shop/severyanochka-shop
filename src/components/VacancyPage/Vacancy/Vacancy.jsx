import React from "react";
import s from "./Vacancy.module.scss";
import { Paragraph } from "./Paragraph/Paragraph";
import telephone from "./telephone.svg";

export const Vacancy = ({ post = "Должность" }) => {
  return (
    <div className={s.vacancy}>
      <h3 className={s.title}>{post}</h3>
      <Paragraph
        post="Требования"
        text="Текст про требования текст про требования текст про требования текст про требования текст про требования"
      />
      <Paragraph
        post="Обязанности"
        text="Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности"
      />
      <Paragraph
        post="Условия"
        text="Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия"
      />
      <p className={s.text}>Звоните</p>
      <div className={s.wrapper}>
        <img src={telephone} alt="tel" />
        <p className={s.telephone}>+7 904 271 35 90</p>
      </div>
    </div>
  );
};
