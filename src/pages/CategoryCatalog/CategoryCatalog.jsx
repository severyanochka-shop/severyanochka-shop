import React from "react";
import { useParams } from "react-router-dom";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";
import { CategoryPage } from "../../components/CategoryPage/CategoryPage";
import { Burger } from "../../components/Burger/Burger";
import { useCategory } from "../../api/hooks/useCategory";

export const CategoryCatalog = () => {
  const params = useParams();

  const { category, errorCategory, isLoadingCategory } = useCategory(params.category);

  return (
    <Section>

      {!!category && <Burger data={category}/>}
      {!!category && (

        <>
          <Title>{category.name}</Title>
          <CategoryPage category={category} />
        </>
      )}
    </Section>
  );
};

export default CategoryCatalog;
