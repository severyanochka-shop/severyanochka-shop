import React from "react";
import { Category } from "../../components/Category/Category";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";

const Catalog = () => {
  return (
    <Section>
      <Title>Каталог</Title>
      <Category />
    </Section>
  );
};

export default Catalog;
