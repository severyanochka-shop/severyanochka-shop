import React from "react";
import s from "./BannerSpecialOffer.module.scss";
import cardofloyalty from "./assets/cardofloyalty.png";
import basket from "./assets/basket.png";

export const BannerSpecialOffer = () => {
  return (
    <>
      <div className={s.banner_box}>
        <div className={s.bannercard}>
          <div className={s.bannercard__texts}>
            <h3 className={s.bannercard__title}>Оформите карту «Северяночка»</h3>
            <p className={s.bannercard__subtitle}>
              И получайте бонусы при покупке в магазинах и на сайте
            </p>
          </div>
          <img src={cardofloyalty} alt="card" className={s.bannercard__img} />
        </div>
        <div className={s.bannerkorzina}>
          <div className={s.bannerkorzina__texts_cart}>
            <h3 className={s.bannercard__title}>Покупайте акционные товары</h3>
            <p className={s.bannercard__subtitle}>И получайте вдвое больше бонусов</p>
          </div>
          <img src={basket} alt="card" className={s.bannerkorzina__img} />
        </div>
      </div>
    </>
  );
};
