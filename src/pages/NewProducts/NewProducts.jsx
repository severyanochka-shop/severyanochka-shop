import React from "react";
import { GridWrapper } from "../../layout/GridWrapper/GridWrapper";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";

export const NewProducts = () => {
  return (
    <Section>
      <Title>Новинки</Title>
      <GridWrapper />
    </Section>
  );
};

export default NewProducts;
