import React from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Section } from "../../layout/Section/Section";
import { SectionTitle } from "../../layout/SectionTitle/SectionTitle";
import { FlexWrapper } from "../../layout/FlexWrapper/FlexWrapper";
import { Reviews } from "../../components/Reviews/Reviews";
import s from "./Product.module.scss";
import { SectionTitleWrapper } from "../../layout/SectionTitleWrapper/SectionTitleWrapper";
import { SectionLink } from "../../layout/SectionLink/SectionLink";
import { useProduct } from "../../api/hooks/useProduct";
import { useCategory } from "../../api/hooks/useCategory";

const Product = () => {
  const params = useParams();

  const { product, errorProduct, isLoadingProduct } = useProduct(params.product);
  const { category, errorCategory, isLoadingCategory } = useCategory(params.category);

  return (
    <>
      {!!product && (
        <Section>
          <SectionTitle className={s.title}>{product.name}</SectionTitle>
          <ProductCard product={product} />
        </Section>
      )}
      {!!category && (
        <>
          <Section>
            <SectionTitle className={s.subtitle}>С этим товаром покупают</SectionTitle>
            <FlexWrapper data={category.products.slice(0, 4)} />
          </Section>
          <Section>
            <SectionTitle className={s.subtitle}>Отзывы</SectionTitle>
            <Reviews />
          </Section>
          <Section>
            <SectionTitleWrapper>
              <SectionTitle>Акции</SectionTitle>
              <SectionLink to="/stocks">Все акции</SectionLink>
            </SectionTitleWrapper>
            <FlexWrapper data={category.products.slice(5, 9)} />
          </Section>
        </>
      )}
    </>
  );
};

export default Product;
