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
