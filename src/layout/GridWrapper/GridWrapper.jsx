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
          slug={el.data.slug}
          name={el.data.name}
          image={el.data.images[0].full}
          likesArr={likesArr}
          addLike={addLike}
          removeLike={removeLike}
          price_usual={el.data.priceRegular}
          price_discount={el.data.priceWithCard}
        />
      ))}
    </div>
  );
};
