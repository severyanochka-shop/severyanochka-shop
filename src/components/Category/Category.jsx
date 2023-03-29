import React from "react";
import { CategoryItem } from "./CategoryItem/CategoryItem";
import s from "./Category.module.scss";
import { Link } from "react-router-dom";

export const Category = ({ data }) => {
  return (
    <div className={s.category}>
      {data.map((el) => (
        <Link key={el.id} to={`${el.id}`} className={s.link}>
          <CategoryItem name={el.name} image={el.image} />
        </Link>
      ))}
    </div>
  );
};
