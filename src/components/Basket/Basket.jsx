import React from "react";
import s from "./Basket.module.scss";
// import { CardProductBasket } from "./CardProductBasket/CardProductBasket";
import { Checkbox } from "../../ui/Checkbox/Checkbox";
import { Calculator } from "./Calculator/Calculator";

export const Basket = (props) => {
  // const { set = [] } = props;

  return (
    <div className={s.basket}>
      <div className={s.basket__buttons}>
        <div className={s.checkbox__main}>
          <Checkbox medium />
        </div>
        <button className={s.btn_select__all}>Выделить все</button>
        <button className={s.btn_delete__all}>Удалить все</button>
      </div>
      <div className={s.basket__flex}>
        {/*  */}
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
