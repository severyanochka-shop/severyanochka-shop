import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Section } from "../../layout/Section/Section";
import { SectionTitle } from "../../layout/SectionTitle/SectionTitle";
import { FlexWrapper } from "../../layout/FlexWrapper/FlexWrapper";
import { Reviews } from "../../components/Reviews/Reviews";
import s from "./Product.module.scss";
import { SectionTitleWrapper } from "../../layout/SectionTitleWrapper/SectionTitleWrapper";
import { SectionLink } from "../../layout/SectionLink/SectionLink";

const Product = () => {
  const params = useParams();
  const { data } = useSelector((state) => state.dataReducer);
  const product = data.find((el) => el.data.slug === params.product);

  return (
    <>
      <Section>
        <SectionTitle className={s.title}>{product.data.name}</SectionTitle>
        <ProductCard product={product.data} />
      </Section>
      <Section>
        <SectionTitle className={s.subtitle}>С этим товаром покупают</SectionTitle>
        <FlexWrapper data={data} />
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
        <FlexWrapper data={data} />
      </Section>
    </>
  );
};

export default Product;
