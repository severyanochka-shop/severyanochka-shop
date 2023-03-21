import React from "react";
import s from "./Basket.module.scss";
// import { CardProductBasket } from "./CardProductBasket/CardProductBasket";
import { Toggle } from "../../ui/Toggle/Toggle";
import { Checkbox } from "../../ui/Checkbox/Checkbox";
import { CartFlex } from "../../layout/CartFlex/CartFlex";

export const Basket = (props) => {
  const {
    set = [],
    persentOfDiscount = 5,
    accumPoints,
    minOrderSum = 1000,
    bonusPersent = 10,
  } = props;

  let numOfProducts = set.lenght ? set.lenght : 0;
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

  const finalCost = set.reduce((sum, el) => {
    return sum + el.cost * el.quantity;
  }, 0);

  let bonus = (finalCost * bonusPersent) / 100;

  let discount = (finalCost * persentOfDiscount) / 100;
  let discountPrice = finalCost - discount;

  return (
    <div className={s.basket}>
      <div className={s.basket__buttons}>
        <div className={s.checkbox__main}>
          <Checkbox medium unstated />
        </div>
        <button className={s.btn_select__all}>Выделить все</button>
        <button className={s.btn_delete__all}>Удалить все</button>
      </div>
      <div className={s.basket__flex}>
        <CartFlex />

        <div className={s.item2}>
          <div className={s.item2__debit}>
            <div className={s.toggle}>
              <Toggle M />
            </div>
            <p className={s.item2__p}>Списать {accumPoints ? accumPoints : 0} ₽</p>
          </div>
          <p className={s.item2__text}>На карте накоплено {accumPoints ? accumPoints : 0} ₽ </p>
          <table className={s.table}>
            <tbody className={s.table__body}>
              <tr className={s.table__tr}>
                <td>
                  {numOfProducts ? numOfProducts : "нет"} товар{end}
                </td>
                <td style={{ color: "rgba(65, 65, 65, 1)" }} className={s.table__td}>
                  {finalCost} ₽
                </td>
              </tr>
              <tr>
                <td>Скидка</td>
                <td style={{ color: "rgba(255, 102, 51, 1)" }} className={s.table__td}>
                  - {discount ? discount : 0} ₽
                </td>
              </tr>
              <tr className={s.table__total}>
                <td>Итог</td>
                <td
                  style={{
                    color: "rgba(65, 65, 65, 1)",
                    fontSize: "24px",
                    fontWeight: "700",
                  }}
                  className={s.table__td}
                >
                  {discountPrice ? discountPrice : 0} ₽
                </td>
              </tr>
            </tbody>
          </table>
          <div className={s.points}>
            <img src={require("./assets/somegreen.png")} alt="green" />
            <p>
              Вы получаете{" "}
              <strong>
                {bonus ? bonus : 0} бонус{end}
              </strong>{" "}
            </p>
          </div>
          <p className={s.minprice}>Минимальная сумма заказа {minOrderSum} ₽</p>

          <button className={s.basket_btn}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};
