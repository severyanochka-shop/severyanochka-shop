import React from "react";
import { CardCatalog } from "../../components/CardCatalog/CardCatalog";
import cl from "./GridWrapper.module.scss"
import { data } from './data.js'

export const GridWrapper = ({likesArr, addLike, removeLike}) => {
  return (
    <div className={cl.grid_wrapper}>
      {data.map((el) => (
        <CardCatalog
          name={el.name}
          image={el.image_small}
          likesArr={likesArr}
          addLike={addLike}
          removeLike={removeLike}
          price_usual={el.priceRegular}
        />
      ))}
    </div>
  );
};
