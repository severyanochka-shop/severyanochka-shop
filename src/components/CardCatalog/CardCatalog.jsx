import React from "react";
import cl from "./CardCatalog.module.scss";
import product from "./300x300.jpeg";
import stargrey from "./img/stargrey.svg";
import starorange from "./img/starorange.svg";
import { Button } from "../../ui/Button/Button";


export const CardCatalog = ({ product_photo, handler }) => {
  let price_usual = 160.99;
  let product_describe =
    "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное ...";
    let price_discount = 159.99;
    let discount = 50;
  return (
    <div className={cl.card}>
      <img src={product} alt="" className={cl.image} />
      <div className={cl.like_block}>
        <button onClick={handler} className={cl.heart}>
          ❤
        </button>
      </div>
      <div className={cl.discount_block}>
        <p className={cl.discount}>-{discount}%</p>
      </div>
      <div className={cl.info}>
        <div className={cl.price}>
          <div>
            <p className={cl.price_discount}>{price_discount} ₽</p>
            <p className={cl.withcard}>С картой</p>
          </div>
          <div>
            <p className={cl.price_usual}>{price_usual} ₽</p>
            <p className={cl.withoutcard}>Обычная</p>
          </div>
        </div>
        <p className={cl.product_describe}>{product_describe}</p>
      </div>
      <div className={cl.footer_card}>
        <div className={cl.rating}>
          <img src={starorange} alt="" className={cl.star} />
          <img src={starorange} alt="" className={cl.star} />
          <img src={stargrey} alt="" className={cl.star} />
          <img src={stargrey} alt="" className={cl.star} />
          <img src={stargrey} alt="" className={cl.star} />
        </div>
        <Button border="green" className={cl.cardcatalog_button}>
          В корзину
        </Button>
      </div>
    </div>
  );
};
