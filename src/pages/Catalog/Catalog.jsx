import React from "react";
import { Layout } from "../../layout/Layout";
import { Category } from "../../components/Category/Category/Category";
import s from "./Catalog.module.scss";
import { Container } from "../../layout/Container/Container";

export const Catalog = () => {
  return (
    <Layout>
      <Container>
        <h2 className={s.title}>Каталог</h2>
        <Category />
      </Container>
    </Layout>
  );
};
