import React from "react";
import { useCategories } from "../../api/hooks/useCategories";
import { Category } from "../../components/Category/Category";
import { Error } from "../../layout/Error/Error";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";
import { Spinners } from "../../ui/Spinners/Spinners";

const Catalog = () => {
  const { categories, errorCategories, isLoadingCategories } = useCategories();

  return (
    <Section>
      <Title>Каталог</Title>
      {!!isLoadingCategories && <Spinners type="circle" />}
      {!!errorCategories && <Error />}
      {!!categories && <Category categories={categories} />}
    </Section>
  );
};

export default Catalog;
