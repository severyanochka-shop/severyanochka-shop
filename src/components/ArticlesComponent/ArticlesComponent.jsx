import React from "react";
import { ModalArticle } from "../../layout/Modal/ModalArticle/ModalArticle";
import { Container } from "../../layout/Container/Container";
import s from "./ArticlesComponent.module.scss";

export const ArticlesComponent = ({ date, title, text, image }) => {
  return (
    <Container>
      <div className={s.article}>
        <img src={image} alt={title} className={s.article__image} />
        <div className={s.article__wrapper}>
          <span className={s.article__date}>{date}</span>
          <h1 className={s.article__title}>{title}</h1>
          <p className={s.article__text}>{text}</p>
        </div>
      </div>
    </Container>
  );
};
