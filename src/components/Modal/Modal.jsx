import React from "react";
import s from "./Modal.module.scss";
import telephone from "./assets/telephone.svg";
import { Paragraph } from "../Vacancies/Vacancy/Paragraph/Paragraph";

export const Modal = ({
  post = "Должность",
  text = "Текст про требования текст про требования текст про требования текст про требования текст про требования",
}) => {
  return (
    <div
      className={s.modal}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <h2 className={s.title}>{post}</h2>
      <div className={s.main}>
        <Paragraph post="Требования" text={text} />
        <Paragraph post="Требования" text={text} />
        <Paragraph post="Требования" text={text} />
      </div>
      <p className={s.text}>Звоните</p>
      <div className={s.wrapper}>
        <img src={telephone} alt="tel" />
        <a
          href="tel:89042713590"
          className={s.telephone}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          +7 904 271 35 90
        </a>
      </div>
    </div>
  );
};
