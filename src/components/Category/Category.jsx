import React from "react";
import { CategoryItem } from "./CategoryItem/CategoryItem";
import s from "./Category.module.scss";
import { Container } from "../../layout/Container/Container";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Category = () => {
  const { categories } = useSelector((state) => state.categoriesReducer);
  return (
    <Container>
      <div className={s.category}>
        {categories.map((el) => (
          <Link key={el.id} to={`${el.order}`} className={s.link}>
            <CategoryItem name={el.name} image={el.image} />
          </Link>
        ))}
      </div>
    </Container>
  );
};
