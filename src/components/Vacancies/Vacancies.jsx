import React from "react";
import { Vacancy } from "./Vacancy/Vacancy";
import s from "./Vacancies.module.scss";

export const Vacancies = () => {
  return (
    <div className={s.vacancy}>
      <Vacancy />
      <Vacancy />
      <Vacancy />
      <Vacancy />
      <Vacancy />
      <Vacancy />
      {/* {vacancyset.lenght ? (
          vacancyset.map((item) => {
            return <Vacancy key={item.id} {...item} />;
          })
        ) : (
          <div className={s.item_empty}>Свободных вакансий нет</div>
        )} */}
    </div>
  );
};
