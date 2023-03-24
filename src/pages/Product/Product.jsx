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
  const product = data.filter((el) => el.data.slug === params.slug);
  const pr = product[0];
  console.log(pr.data);
  return (
    <Section>
      <SectionTitle className={s.title}>{product[0].data.name}</SectionTitle>
      <ProductCard product={product[0].data} />
    </Section>
  );
};

export default Product;
