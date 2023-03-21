import React from "react";
import { Button } from "../../ui/Button/Button";
import s from "./Article.module.scss";

export const Article = ({ date, title, text, image }) => {
  return (
    <>
      <div className={s.article}>
        <img src={image} alt="title picture" className={s.article__image} />
        <div className={s.article__wrapper}>
          <span className={s.article__date}>{date}</span>
          <h1 className={s.article__title}>{title}</h1>
          <p className={s.article__text}>{text}</p>{" "}
          <Button background="green" disabled medium className={s.article__button}>
            Подробнее
          </Button>
        </div>
      </div>
    </>
  );
};
