import React from "react";
import s from "./MainWrapperCard.module.scss";
import { CardCatalog } from "../../components/CardCatalog/CardCatalog";
import { data } from "./data";

export const MainWrapperCard = () => {
  return (
    <div className={s.wrapper}>
      {data.slice(0, 4).map((el, i) => (
        <CardCatalog
          key={i}
          product_img={el.image_small}
          price_usual={el.priceRegular}
          product_describe={el.name}
          discount={el.priceWithCard}
        ></CardCatalog>
      ))}
    </div>
  );
};
