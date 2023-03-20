import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "../../layout/Container/Container";
import s from "../Pages.module.scss";

export const CategoryCatalog = () => {
  const params = useParams();
  const { categories } = useSelector((state) => state.categoriesReducer);

  return (
    <Container>
      <h1 className={s.title}>{categories[params.category - 1].name}</h1>
    </Container>
  );
};

export default CategoryCatalog;
