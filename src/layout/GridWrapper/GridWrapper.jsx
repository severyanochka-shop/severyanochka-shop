import React from "react";
import { CardCatalog } from "../../components/CardCatalog/CardCatalog";
import cl from "./GridWrapper.module.scss";

export const GridWrapper = ({ data }) => {
  return (
    <div className={cl.grid_wrapper}>
      {data.map((el) => (
        <CardCatalog key={el.slug} el={el} />
      ))}
    </div>
  );
};
