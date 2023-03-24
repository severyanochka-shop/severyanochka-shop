import React from "react";
import { GridWrapper } from "../../layout/GridWrapper/GridWrapper";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";

export const Favourites = () => {
  return (
    <Section>
      <Title>Избранное</Title>
      <GridWrapper />
    </Section>
  );
};

export default Favourites;
