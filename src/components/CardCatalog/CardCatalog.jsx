import React, { useState } from "react";
import cl from "./CardCatalog.module.scss";
import basket from "./assets/shoppingcart.svg";
import { Button } from "../../ui/Button/Button";
import { Stars } from "../Reviews/Starts/Stars";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const CardCatalog = ({
  id,
  image,
  price_usual,
  discount,
  handlerLike,
  addInBasket,
  price_discount,
  name,
  counter,
}) => {
  const params = useParams();
  const { categories } = useSelector((state) => state.categoriesReducer);

  return (
    <div className={cl.card}>
      <Link className={cl.link} to={`/category/${1}/${id}`}>
        {counter && (
          <div className={cl.basket_block}>
            <img src={basket} alt="basket" />
            <p>{counter}</p>
          </div>
        )}

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
              <p className={cl.price_discount}>
                {(discount ? (price_usual * discount) / 100 : price_discount).toFixed(2)} ₽
              </p>
              <p className={cl.withcard}>С картой</p>
            </div>
            <div>
              <p className={cl.price_usual}>{price_usual.toFixed(2)} ₽</p>
              <p className={cl.withoutcard}>Обычная</p>
            </div>
          </div>
          <p className={cl.product_describe}>{name}</p>
        </div>
      </Link>
      <div className={cl.footer_card}>
        <div className={cl.rating}>
          <Stars />
        </div>
        <Button border="green" className={cl.cardcatalog_button} onClick={addInBasket}>
          В корзину
        </Button>
      </div>
    </div>
  );
};
