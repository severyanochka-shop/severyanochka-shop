import React from "react";
import s from "./FlexWrapper.module.scss";
import { CardCatalog } from "../../components/CardCatalog/CardCatalog";

export const FlexWrapper = ({ data }) => {
  return (
    <div className={s.wrapper}>
      {data.slice(0, 4).map((el, i) => (
        <CardCatalog key={el.slug} el={el} />
      ))}
    </div>
  );
};
