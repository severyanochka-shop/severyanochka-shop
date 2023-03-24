import React from "react";
import s from "./Basket.module.scss";
import { Checkbox } from "../../ui/Checkbox/Checkbox";
import { Calculator } from "./Calculator/Calculator";
import { CartFlex } from "../../layout/CartFlex/CartFlex";

export const Basket = () => {
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
        <Calculator />
      </div>
    </div>
  );
};
