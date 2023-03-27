import React from "react";
import s from "./ModalArticle.module.scss";

export const ModalArticle = ({ date, title, text, image }) => {
  return (
    <>
      <img src={image} alt={title} className={s.article__image} />
      <div className={s.article__wrapper}>
        <span className={s.article__date}>{date}</span>
        <h1 className={s.article__title}>{title}</h1>
        <p className={s.article__text}>{text}</p>
      </div>
    </>
  );
};
