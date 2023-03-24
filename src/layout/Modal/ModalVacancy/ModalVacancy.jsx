import React from "react";
import s from "./ModalVacancy.module.scss";
import { Paragraph } from "../../../components/Vacancies/Vacancy/Paragraph/Paragraph";
import telephone from "../assets/telephone.svg";

export const ModalVacancy = (props) => {
  return (
    <div className={s.modalvacancy}>
      <div>
        <h2 className={s.title}>Должность</h2>
        <div className={s.main}>
          <Paragraph
            post="Требования"
            text="Текст про требования текст про требования текст про требования текст про требования текст про требования. Текст про требования текст про требования текст про требования текст про требования текст про требования"
          />
          <Paragraph
            post="Обязанности"
            text="Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности. Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности"
          />
          <Paragraph
            post="Условия"
            text="Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия."
          />
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
          <a
            className={s.mail}
            href="mailto:oooseveranochka@mail.ru&body=Здравствуйте"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Напишите нам
          </a>
        </div>
      </div>
    </div>
  );
};
