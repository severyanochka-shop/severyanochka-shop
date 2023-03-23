import React from "react";
import { CardCatalog } from "../../components/CardCatalog/CardCatalog";
import cl from "./GridWrapper.module.scss";
import { useSelector } from "react-redux";

export const GridWrapper = ({ likesArr, addLike, removeLike }) => {
  const { data } = useSelector((state) => state.dataReducer);
  data.forEach((el) => console.log(el.id));
  return (
    <div className={cl.grid_wrapper}>
      {data.map((el) => (
        <CardCatalog
          id={el.id}
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
