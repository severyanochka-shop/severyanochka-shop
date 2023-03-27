import React from "react";
import s from "../Burger/Burger.module.scss";
import { Button } from "../../ui/Button/Button";
import { InputRange } from "../../ui/InputRange/InputRange";
import { Toggle } from "../../ui/Toggle/Toggle";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { burgerSlice } from "../../store/reducers/BurgerSlice";

export const Burger = ({ deletePriceRange, funcApply, inStock, subcategory }) => {
  const { getBurger } = burgerSlice.actions;
  const burgerHide = useSelector((state) => state.burgerReducer.burgerHide);
  const dispatch = useDispatch();

  let initial_value = 44;
  let final_value = 100;
  let filter_counter = 6;

  return (
    <div className={burgerHide ? clsx(s.wrapper, s.wrapper_hide) : s.wrapper}>
      <div className={s.filter}>
        <div className={s.button_filter}>
          <span>Фильтр</span>
        </div>

        <div className={s.deletebtn_block}>
          <div className={s.btn_quantity}>
            <div className={s.green_block}>
              <p className={s.text_green}>Фильтр {filter_counter} </p>
              <button className={clsx(s.cross, s.cross_green)}>✕</button>
            </div>
          </div>
          <div className={s.btn_price}>
            <div className={s.green_block}>
              <p className={s.text_green}>
                Цена от {initial_value} до {final_value}
              </p>
              <button className={clsx(s.cross, s.cross_green)} onClick={deletePriceRange}>
                ✕
              </button>
            </div>
          </div>
          <div className={s.btn_delete}>
            <div className={clsx(s.green_block, s.green_block_gray)}>
              <p className={s.text_gray}>Очистить фильтры</p>
              <button className={clsx(s.cross, s.cross_gray)}>✕</button>
            </div>
          </div>
        </div>

        <div className={s.filter_none}>
          <InputRange burger />
          <ul className={s.list}>
            <li className={s.list_item}>{subcategory}</li>
            <li className={s.list_item}>example1</li>
            <li className={s.list_item}>example2</li>
            <li className={s.list_item}>example3</li>
            <li className={s.list_item}>example4</li>
          </ul>
          <div className={s.stock}>
            <Toggle M onChange={inStock} />
            <p>В наличии</p>
          </div>
          <Button small background="orange" className={s.btn_apply} onClick={funcApply}>
            Применить
          </Button>
        </div>
      </div>
    </div>
  );
};
