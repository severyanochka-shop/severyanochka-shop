import React, { useState } from "react";
import s from "./ProductCard.module.scss";
import { Stars } from "../Reviews/Starts/Stars";
import heart from "./assets/heart.svg";
import clsx from "clsx";

export const ProductCard = (props) => {
  const {
    name = "простоквашино",
    image = require("./assets/imageofsimilar.png"),
    price = 100,
    discount = 5,
    numOfReviews = 2,
    country = "Россия",
    weight = 100,
    imagesOfProduct = [],
    imagesOfSimilar = [],
  } = props;

  let discountPrice = price - (price * discount) / 100;
  let end = "ов";
  // редактирует окончание в зависимости от кол-ва отзывов
  if (numOfReviews) {
    if (numOfReviews === 1) end = "";
    if (numOfReviews > 1 && numOfReviews < 5) end = "a";
    if (numOfReviews > 5) end = "ов";
    if (numOfReviews > 20) {
      let num = numOfReviews % 10;
      if (num === 1) end = "";
      if (num > 1 && num < 5) end = "a";
      if (num > 5) end = "ов";
    }
  }

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__nav}>
        <p className={s.art}>арт. 371431</p>
        <div className={s.nav__stars}>
          <Stars type="2" />
          <p className={s.nav__stars__rewiew}>{!!numOfReviews && `${numOfReviews} отзыв${end}`}</p>
        </div>
        <button className={clsx(s.btn_favorites, s.btn_favorites_share)}>
          <p>Поделиться</p>
        </button>
        <button className={clsx(s.btn_favorites, s.btn_favorites_heart)}>
          <p>В избранное</p>
        </button>
      </div>
      <div className={s.card__flex}>
        <div className={s.item1}>
          {imagesOfProduct.map((item) => {
            return <img key={item.id} src={item.image} alt="product" {...item} />;
          })}
        </div>
        <div className={s.item2}>
          <img src={image} alt="main-product-foto" />
        </div>
        <div className={s.item3}>
          <table className={s.table1}>
            <tbody className={s.table1__body}>
              <tr>
                <td>{price} ₽</td>
                <td className={s.table1__price}>{discountPrice ? discountPrice : 0} ₽</td>
              </tr>
              <tr>
                <td>Обычная цена</td>
                <td>
                  <button className={s.btn_info}>
                    С картой Северяночки
                    <img className={s.table1__info} src={require("./assets/info.png")} alt="ⓘ" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className={s.btn_basket}>
            <img src={require("./assets/basket.png")} alt="basket" /> В корзину
          </button>
          <div className={s.points}>
            <img src={require("./assets/somegreen.png")} alt="green" />
            <p>
              Вы получаете <strong>10 бонусов</strong>{" "}
            </p>
          </div>
          <div className={s.notice}>
            <img src={require("./assets/bell-off.png")} alt="🔕" />
            <button className={s.btn_notice}>Уведомить о снижении цены</button>
          </div>
          <table className={s.table2}>
            <tbody className={s.table2__body}>
              <tr className={s.table2__tr}>
                <td className={s.table2__td}>Бренд</td>
                <td style={{ textTransform: "uppercase" }}>{name}</td>
              </tr>
              <tr className={s.table2__tr}>
                <td className={s.table2__td}>Страна производителя</td>
                <td>{country}</td>
              </tr>
              <tr className={s.table2__tr}>
                <td className={s.table2__td}>Упаковка</td>
                <td>{weight} г</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={s.item4}>
          <h6 className={s.item4__title}>Похожие</h6>
          <div className={s.item4__box}>
            {imagesOfSimilar.lenght ? (
              imagesOfSimilar.map((item) => {
                return (
                  <div key={item.id} {...item}>
                    <img src={item.image} alt="foto" />
                    <p>{item.price} ₽</p>
                  </div>
                );
              })
            ) : (
              <div>
                <img src={require("./assets/imageofsimilar.png")} alt="foto" />
                <p>157,50 ₽</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
