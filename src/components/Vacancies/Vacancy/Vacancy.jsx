import React from "react";
import s from "./Vacancy.module.scss";
import { Paragraph } from "./Paragraph/Paragraph";
import telephone from "./telephone.svg";
import { useState } from "react";
import { Modal } from "../../../layout/Modal/Modal";
import { ModalVacancy } from "../../../layout/Modal/ModalVacancy/ModalVacancy";

export const Vacancy = ({ post = "Должность" }) => {
  const [isModal, setIsModal] = useState(false);
  const handleClose = () => {
    setIsModal(!isModal);
  };
  return (
    <div className={s.vacancy} onClick={handleClose}>
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
        <a
          href="tel:+7 904 271 35 90"
          className={s.telephone}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          +7 904 271 35 90
        </a>
      </div>
      {isModal && <Modal handleClose={handleClose} children={<ModalVacancy />} />}
    </div>
  );
};
