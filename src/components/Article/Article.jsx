import React from "react";
import { Button } from "../../ui/Button/Button";
import s from "./Article.module.scss";
import { useState } from "react";
import { Modal } from "../../layout/Modal/Modal";
import { ModalArticle } from "../../layout/Modal/ModalArticle/ModalArticle";

export const Article = ({ date, title, text, image }) => {
  const [isModal, setIsModal] = useState(false);
  const handleClose = () => {
    setIsModal(!isModal);
  };
  return (
    <div className={s.article}>
      <img src={image} alt={title} className={s.article__image} />
      <div className={s.article__wrapper}>
        <span className={s.article__date}>{date}</span>
        <h1 className={s.article__title}>{title}</h1>
        <p className={s.article__text}>{text}</p>
        <Button
          background="green"
          disabled
          medium
          className={s.article__button}
          handler={handleClose}
        >
          Подробнее
        </Button>
      </div>
      {isModal && <Modal handleClose={handleClose} children={<ModalArticle />} />}
    </div>
  );
};
