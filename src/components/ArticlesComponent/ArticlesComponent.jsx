import React from "react";
import { ModalArticle } from "../../layout/Modal/ModalArticle/ModalArticle";
import { Container } from "../../layout/Container/Container";
import s from "./ArticlesComponent.module.scss";

export const ArticlesComponent = ({ date, title, text, image }) => {
  return (
    <Container>
      <span className={s.article__date}>{date}</span>
      <img src={image} alt={title} className={s.article__image} />
      <h1 className={s.article__title}>{title}</h1>
      <p className={s.article__text}>{text}</p>
    </Container>
  );
};
