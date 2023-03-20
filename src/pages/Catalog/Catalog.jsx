import React from "react";
import { Category } from "../../components/Category/Category";
import s from "../Pages.module.scss";
import { Container } from "../../layout/Container/Container";

const Catalog = () => {
  return (
    <Container>
      <h2 className={s.title}>Каталог</h2>
      <Category />
    </Container>
  );
};

export default Catalog;
