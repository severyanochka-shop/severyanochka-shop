import React from "react";
import cl from "./SimilarProduct.module.scss";
export const SimilarProduct = ({ img, price }) => {
  return (
    <div className={cl.similar_card}>
      <img className={cl.image} src={img} alt="product" />
      <p className={cl.price}>{price} ₽</p>
    </div>
  );
};
