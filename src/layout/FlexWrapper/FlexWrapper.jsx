import React from "react";
import s from "./FlexWrapper.module.scss";
import { CardCatalog } from "../../components/CardCatalog/CardCatalog";

export const FlexWrapper = ({ data }) => {
  return (
    <div className={s.wrapper}>
      {data.slice(0, 4).map((el, i) => (
        <CardCatalog
          el={el.data}
          key={el.data.slug}
          slug={el.data.slug}
          image={el.data.images[0].full}
          price_usual={el.data.priceRegular}
          name={el.data.name}
          discount={el.data.priceWithCard}
        />
      ))}
    </div>
  );
};
