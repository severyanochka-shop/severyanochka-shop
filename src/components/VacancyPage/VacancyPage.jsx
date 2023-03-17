import React from "react";
import { Vacancy } from "./Vacancy/Vacancy";
import s from "./VacancyPage.module.scss";

export const VacancyPage = (props) => {
  // const { vacancyset = [] } = props;
  return (
    <div className={s.vacancy_page}>
      <h2 className={s.vacancy_page_title}>Вакансии</h2>
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
    </div>
  );
};
