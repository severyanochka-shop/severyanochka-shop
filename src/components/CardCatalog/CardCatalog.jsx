import React from "react";
import cl from "./CardCatalog.module.scss";
import cart from "./assets/shoppingcart.svg";
import { Button } from "../../ui/Button/Button";
import { Stars } from "../Reviews/Starts/Stars";
import { Link, useParams } from "react-router-dom";
import { Discount } from "../../ui/Discount/Discount";
import heart from "./assets/heart.svg";
import clsx from "clsx";

export const CardCatalog = ({ el }) => {
  const params = useParams();
  const counter = 5;

  return (
    <Link
      className={cl.link}
      to={`/category/${params.category ? params.category : "molochnie-producti-i-yaizo"}/${
        el.slug
      }`}
    >
      <div className={cl.card}>
        <img src={el.images[0].small} alt="product" className={cl.card__image} />
        {counter && <p className={cl.card__cart}>{counter}</p>}
        <button className={cl.card__heart}>
          <img src={heart} alt="♡" />
        </button>
        <Discount
          orange
          large
          className={cl.card__discount}
          text={`-${el.promo.discountPercent}%`}
        />
        <div className={cl.card__content_wrapper}>
          <div className={cl.card__price}>
            <div>
              <p className={cl.price__priceWithCard}>{el.priceWithCard} ₽</p>
              <p className={cl.price__availableСard}>С картой</p>
            </div>
            <div>
              <p className={clsx(cl.price__upriceRegular, cl.alignRight)}>{el.priceRegular} ₽</p>
              <p className={clsx(cl.price__availableСard, cl.price__alignRight)}>Обычная</p>
            </div>
          </div>
          <p className={cl.card__description}>{el.name}</p>
          <Stars />

          <Button border="green" className={cl.card__button}>
            В корзину
          </Button>
        </div>
      </div>
    </Link>
  );
};
