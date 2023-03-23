import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Section } from "../../layout/Section/Section";
import { SectionTitle } from "../../layout/SectionTitle/SectionTitle";
import s from "./Product.module.scss";

const Product = () => {
  const params = useParams();
  const { data } = useSelector((state) => state.dataReducer);
  const product = data.filter((el) => el.id === params.id);
  console.log(product);

  return (
    <Section>
      <SectionTitle className={s.title}>{product[0].name}</SectionTitle>
      <ProductCard />
    </Section>
  );
};

export default Product;
