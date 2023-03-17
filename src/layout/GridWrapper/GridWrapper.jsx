import React from "react";
import { CardCatalog } from "../../components/CardCatalog/CardCatalog";
import cl from "./GridWrapper.module.scss"

export const GridWrapper = ({likesArr, addLike, removeLike,arr}) => {
  return (
    <div className={cl.grid_wrapper}>
      {arr.map((el) => (
        <CardCatalog
          name={el.name}
          image={el.image}
          likesArr={likesArr}
          addLike={addLike}
          removeLike={removeLike}
        />
      ))}
    </div>
  );
};
