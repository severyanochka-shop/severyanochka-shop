import React from "react";
import { CardCatalog } from "../../components/CardCatalog/CardCatalog";
import cl from "./GridWrapper.module.scss";
import { useSelector } from "react-redux";

export const GridWrapper = ({ likesArr, addLike, removeLike }) => {
  const { data } = useSelector((state) => state.dataReducer);

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
          price_discount={el.priceWithCard}
        />
      ))}
    </div>
  );
};
