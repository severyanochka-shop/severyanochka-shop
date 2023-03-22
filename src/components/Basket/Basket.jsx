import React from "react";
import s from "./Basket.module.scss";
// import { CardProductBasket } from "./CardProductBasket/CardProductBasket";
import { Checkbox } from "../../ui/Checkbox/Checkbox";


export const Basket = (props) => {
  // const { set = [] } = props;

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

        <ul className={s.item1}>
          {/* {set.lenght ? (
              set.map((item) => {
                return (
                  <li className={s.product}>
                    <CardProductBasket key={item.id} {...item} />
                  </li>
                );
              })
            ) : (
              <li className={s.basketitem}>Вы ничего не выбрали</li>
            )} */}
        </ul>
        <Calculator />
      </div>
    </div>
  );
};
