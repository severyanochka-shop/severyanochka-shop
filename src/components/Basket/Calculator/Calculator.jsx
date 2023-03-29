import React from "react";
import s from "./Calculator.module.scss";
import { Toggle } from "../../../ui/Toggle/Toggle";
import green from "../assets/somegreen.png";
import { useSelector } from "react-redux";

export const Calculator = (props) => {
  const { data } = useSelector((state) => state.dataReducer);
  const {
    persentOfDiscount = 5,
    accumPoints,
    minOrderSum = 1000,
    bonusPersent = 10,
    btn = "Оформить заказ",
    display = "block",
  } = props;

  let numOfProducts = data.reduce((sum) => {
    return sum + 1;
  }, 0);

  let end = "ов";
  // редактирует окончание в зависимости от кол-ва товаров
  if (numOfProducts) {
    if (numOfProducts === 1) end = "";
    if (numOfProducts > 1 && numOfProducts < 5) end = "a";
    if (numOfProducts > 5) end = "ов";
    if (numOfProducts > 20) {
      let num = numOfProducts % 10;
      if (num === 1) end = "";
      if (num > 1 && num < 5) end = "a";
      if (num > 5) end = "ов";
    }
  }

  const finalCost = data.reduce((sum, el) => {
    return sum + el.data.priceWithCard;
  }, 0);
  let bonus = (finalCost * bonusPersent) / 100;
  let discount = (finalCost * persentOfDiscount) / 100;
  let discountPrice = finalCost - discount;

  return (
    <div className={s.item2}>
      <div className={s.item2__debit}>
        <div className={s.toggle}>
          <Toggle M />
        </div>
        <p className={s.item2__p}>Списать {accumPoints ? accumPoints : 0} ₽</p>
      </div>
      <p className={s.item2__text}>На карте накоплено {accumPoints ? accumPoints : 0} ₽ </p>
      <div className={s.table}>
        <p className={s.table__goods}>
          {numOfProducts ? numOfProducts : "нет"} товар{end}
        </p>
        <p className={s.table__cost}>{finalCost} ₽</p>
        <p>Скидка</p>
        <p className={s.table__discount}>- {discount ? discount : 0} ₽</p>
        <p className={s.table__p}>Итог</p>
        <p className={s.table__final}>{discountPrice ? discountPrice : 0} ₽</p>
      </div>
      <div className={s.points}>
        <img src={green} alt="green" />
        <p>
          Вы получаете{" "}
          <strong>
            {bonus ? bonus : 0} бонус{end}
          </strong>{" "}
        </p>
      </div>
      <p style={{ display: display }} className={s.minprice}>
        Минимальная сумма заказа {minOrderSum} ₽
      </p>

      <button className={s.basket_btn}>{btn}</button>
    </div>
  );
};
