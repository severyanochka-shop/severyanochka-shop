import React from "react";
import { useParams } from "react-router-dom";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";
import { CategoryPage } from "../../components/CategoryPage/CategoryPage";
import { Burger } from "../../components/Burger/Burger";
import { useCategory } from "../../api/hooks/useCategory";

const CategoryCatalog = () => {
  const params = useParams();

  const args = {
    productsLimit: 10000,
  };

  const { category, errorCategory, isLoadingCategory } = useCategory(params.category, args);

  console.log(category);

  return (
    <Section>
      {/* {!!category && <Burger data={category}/>} */}
      {!!category && (
        <>
          <Title>{category.name}</Title>
          <CategoryPage
            categorySlug={params.category}
            subcategories={category.subcategories}
            minPrice={category.productsMinPrice}
            maxPrice={category.productsMaxPrice}
          />
        </>
      )}
    </Section>
  );
};

export default CategoryCatalog;
