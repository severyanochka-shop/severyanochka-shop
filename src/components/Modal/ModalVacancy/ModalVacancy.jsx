import React from "react";
import s from "./ModalVacancy.module.scss";
import { Paragraph } from "../../Vacancies/Vacancy/Paragraph/Paragraph";
import telephone from "../assets/telephone.svg";

export const ModalVacancy = (props) => {
  const { title = "Должность", text, post = "обязанности" } = props;
  return (
    <div className={s.modalvacancy}>
      <div>
        <h2 className={s.title}>{title}</h2>
        <div className={s.main}>
          <Paragraph post={post} text={text} />
          <Paragraph post={post} text={text} />
          <Paragraph post={post} text={text} />
        </div>
      </div>
      <div>
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
    </div>
  );
};
