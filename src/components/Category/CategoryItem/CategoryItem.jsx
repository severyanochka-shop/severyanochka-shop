import React from "react";
import s from "./CategoryItem.module.scss";

export const CategoryItem = ({ name, image }) => {
  return (
    <div className={s.item}>
      {!image ?? <img className={s.img} src={image} alt={name} />}
      <div className={s.shadow}></div>
      <p className={s.title}>{name}</p>
    </div>
  );
};
