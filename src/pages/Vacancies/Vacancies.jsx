import React from "react";
import { Vacancies as VacanciesComponent } from "../../components/Vacancies/Vacancies";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";

export const Vacancies = () => {
  return (
    <Section>
      <Title>Вакансии</Title>
      <VacanciesComponent />
    </Section>
  );
};

export default Vacancies;
