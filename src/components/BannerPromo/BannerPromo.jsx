import React from "react";
import s from "./BannerPromo.module.scss";
import basket_big from "./assets/basket_big.png";
import basket_small from "./assets/basket_small.png";

export const BannerPromo = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__filter}></div>
      <picture>
        <source media="(max-width: 1207px)" srcSet={basket_small} />
        <source media="(min-width: 1208px)" srcSet={basket_big} />
        <img src={basket_big} alt="Basket" className={s.wrapper__image} />
      </picture>
      <h1 className={s.wrapper__title}>Доставка бесплатно от 1000 ₽</h1>
    </div>
  );
};
