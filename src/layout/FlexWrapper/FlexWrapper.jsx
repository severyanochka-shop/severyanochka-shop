import React from "react";
import s from "./FlexWrapper.module.scss";
import { CardCatalog } from "../../components/CardCatalog/CardCatalog";

import { useSelector } from "react-redux";

export const FlexWrapper = () => {
  const { data } = useSelector((state) => state.dataReducer);

  return (
    <div className={s.wrapper}>
      {data.slice(0, 4).map((el, i) => (
        <CardCatalog
          key={i}
          image={el.image_small}
          price_usual={el.priceRegular}
          product_describe={el.name}
          discount={el.priceWithCard}
        ></CardCatalog>
      ))}
    </div>
  );
};
