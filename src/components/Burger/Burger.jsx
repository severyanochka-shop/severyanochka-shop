import React from "react";
import s from "../Burger/Burger.module.scss";
import { Button } from "../../ui/Button/Button";
import { InputRange } from "../../ui/InputRange/InputRange";
import { Toggle } from "../../ui/Toggle/Toggle";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { getBurger } from "../../store/reducers/BurgerSlice";

export const Burger = (
  // hideFilter,
  deleteFilters,
  deletePriceRange,
  funcApply,
  inStock,
  subcategory,
) => {
  const burgerHide = useSelector((state) => state.burgerReducer.burgerHide);
  const dispatch = useDispatch();

  let initial_value = 44;
  let final_value = 100;
  let filter_counter = 6;

  console.log(burgerHide)

  return (
    <div className={burgerHide ? clsx(s.wrapper, s.wrapper_hide) : s.wrapper}>
      <div className={s.filter}>
        <Button
          medium
          background="gray"
          className={s.button_filter}
          handler={() => dispatch(getBurger())}
        >
          <p className={s.text_filter}>Фильтр</p>
        </Button>
        <div className={s.deletebtn_block}>
          <Button small background="green" className={s.btn_quantity}>
            <div className={s.green_block}>
              <p className={s.text_green}>Фильтр {filter_counter} </p>
              <button className={s.cross_green} onClick={deleteFilters}>
                ✕
              </button>
            </div>
          </Button>
          <Button small background="green" className={s.btn_price}>
            <div className={s.green_block}>
              <p className={s.text_green}>
                Цена от {initial_value} до {final_value}
              </p>
              <button className={s.cross_green} onClick={deletePriceRange}>
                ✕
              </button>
            </div>
          </Button>
          <Button small background="gray" className={s.btn_delete}>
            <div className={s.green_block}>
              <p className={s.text_gray}>Очистить фильтры</p>
              <button className={s.cross_gray}>✕</button>
            </div>
          </Button>
        </div>

        <div className={s.filter_none}>
          <InputRange />
          {/* <div className={s.list_block}> */}
          <ul>
            <li>{subcategory}</li>
            <li>example1</li>
            <li>example2</li>
            <li>example3</li>
            <li>example4</li>
          </ul>
          {/* </div> */}
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