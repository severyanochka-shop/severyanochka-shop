import React from "react";
import cl from "./CardCatalog.module.scss";
import stargrey from "./img/stargrey.svg";
import starorange from "./img/starorange.svg";
import { Button } from "../../ui/Button/Button";


export const CardCatalog = ({
  image,
  price_usual,
  product_describe,
  discount,
  handlerLike,
  handlerBasket,
}) => {
  return (
    <div className={cl.card}>
      <img src={image} alt="" className={cl.image} />
      <div className={cl.like_block}>
        <button onClick={handlerLike} className={cl.heart}>
          ❤
        </button>
      </div>
      <div className={cl.discount_block}>
        <p className={cl.discount}>-{discount}%</p>
      </div>
      <div className={cl.info}>
        <div className={cl.price}>
          <div>
            <p className={cl.price_discount}>{(price_usual * discount) / 100} ₽</p>
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
        <Button border="green" className={cl.cardcatalog_button} onClick={handlerBasket}>
          В корзину
        </Button>
      </div>
    </div>
  );
};
