import React from "react";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";
import { PersonalData } from "../../components/PersonalData/PersonalData";

const Policy = () => {
  return (
    <Section>
      <Title>Политика обработки персональных данных</Title>
      <PersonalData />
    </Section>
  );
};

export default Policy;
