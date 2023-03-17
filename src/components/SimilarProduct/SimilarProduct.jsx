import React from "react";
import cl from "./SimilarProduct.module.scss";
export const SimilarProduct = ({img, price}) => {
    
  return (
    <div className={cl.similar_card}>
      <img src={img} alt="product" />
      <p className={cl.price}>{price} ₽</p>
    </div>
  );
};
