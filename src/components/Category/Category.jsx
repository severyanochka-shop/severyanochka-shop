import React from "react";
import { CategoryItem } from "./CategoryItem/CategoryItem";
import s from "./Category.module.scss";
import { Link } from "react-router-dom";

export const Category = ({ categories }) => {
  return (
    <div className={s.category}>
      {categories.map((el) => (
        <Link key={el.id} to={`${el.slug}`} className={s.link} onClick={()=>{}}>
          <CategoryItem name={el.name} image={el.image} />
        </Link>
      ))}
    </div>
  );
};
