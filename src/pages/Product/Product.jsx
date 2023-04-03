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
import { Spinners } from "../../ui/Spinners/Spinners";
import { Error } from "../../layout/Error/Error";

const Product = () => {
  const params = useParams();

  const { product, errorProduct, isLoadingProduct } = useProduct(params.product);
  const { category, errorCategory, isLoadingCategory } = useCategory(params.category, {
    productsLimit: 4,
  });

  const {
    category: stocks,
    errorCategory: errorStocks,
    isLoadingCategory: isLoadingStocks,
  } = useCategory(params.category, {
    productsLimit: 4,
    productsFilterWithDiscount: true,
  });

  return (
    <>
      <Section>
        {!!product && <SectionTitle className={s.title}>{product.name}</SectionTitle>}
        {!!isLoadingProduct && <Spinners type="circle" />}
        {!!errorProduct && <Error />}
        {!!product && <ProductCard product={product} />}
      </Section>
      <Section>
        <SectionTitle className={s.subtitle}>С этим товаром покупают</SectionTitle>
        {!!isLoadingCategory && <Spinners type="circle" />}
        {!!errorCategory && <Error />}
        {!!category && <FlexWrapper data={category.products} />}
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
        {!!isLoadingStocks && <Spinners type="circle" />}
        {!!errorStocks && <Error />}
        {!!stocks && <FlexWrapper data={stocks.products} />}
      </Section>
    </>
  );
};

export default Product;
