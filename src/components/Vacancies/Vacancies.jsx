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
    </div>
  );
};
