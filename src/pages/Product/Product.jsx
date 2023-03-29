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
import axios from "axios";
import useSWR from "swr";

const Product = () => {
  const params = useParams();
  const fetcher = (url) => axios({ url }).then((res) => res.data.data);

  const product = useSWR(`http://codeine.tech:3000/api/products/${params.product}`, fetcher);

  const category = useSWR(`http://codeine.tech:3000/api/categories/${params.category}`, fetcher);

  console.log(product.data);

  return (
    <>
      {!!product.data && (
        <Section>
          <SectionTitle className={s.title}>{product.data.name}</SectionTitle>
          <ProductCard product={product.data} />
        </Section>
      )}
      {!!category.data && (
        <>
          <Section>
            <SectionTitle className={s.subtitle}>С этим товаром покупают</SectionTitle>
            <FlexWrapper data={category.data.products.slice(0, 4)} />
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
            <FlexWrapper data={category.data.products.slice(5, 9)} />
          </Section>
        </>
      )}
    </>
  );
};

export default Product;
