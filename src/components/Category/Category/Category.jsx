import React from "react";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import s from "./Category.module.scss";
import { Container } from "../../../layout/Container/Container";
import { data } from "./data";

export const Category = () => {
  return (
    <Container>
      <div className={s.category}>
        {data.map((el) => (
          <CategoryItem key={el.id} name={el.name} image={el.image} />
        ))}
      </div>
    </Container>
  );
};
