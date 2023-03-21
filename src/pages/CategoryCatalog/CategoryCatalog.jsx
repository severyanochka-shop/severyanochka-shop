import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GridWrapper } from "../../layout/GridWrapper/GridWrapper";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";

export const CategoryCatalog = () => {
  const params = useParams();
  const { categories } = useSelector((state) => state.categoriesReducer);

  return (
    <Section>
      <Title>{categories[params.category - 1].name}</Title>
      <GridWrapper />
    </Section>
  );
};

export default CategoryCatalog;
