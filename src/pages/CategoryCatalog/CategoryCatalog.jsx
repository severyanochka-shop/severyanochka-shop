import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";
import { CategoryPage } from "../../components/CategoryPage/CategoryPage";
import { Burger } from "../../components/Burger/Burger";

export const CategoryCatalog = () => {
  const params = useParams();
  const { categories } = useSelector((state) => state.categoriesReducer);

  return (
    <Section>
      <Burger />
      <Title>{categories.find((el) => el.slug === params.category).name}</Title>
      <CategoryPage />
    </Section>
  );
};

export default CategoryCatalog;
