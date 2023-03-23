import React from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Section } from "../../layout/Section/Section";
import { SectionTitle } from "../../layout/SectionTitle/SectionTitle";
import s from "./Product.module.scss";

const Product = () => {
  return (
    <Section>
      <SectionTitle className={s.title}>
        Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г
      </SectionTitle>
      <ProductCard />
    </Section>
  );
};

export default Product;
