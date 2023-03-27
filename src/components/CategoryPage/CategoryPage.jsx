import React, { useEffect, useState } from "react";
import { Container } from "../../layout/Container/Container";
import { GridWrapper } from "../../layout/GridWrapper/GridWrapper";
import { Button } from "../../ui/Button/Button";
import { InputRange } from "../../ui/InputRange/InputRange";
import { Toggle } from "../../ui/Toggle/Toggle";
import s from "./CategoryPage.module.scss";
import { useDispatch } from "react-redux";
import { burgerSlice } from "../../store/reducers/BurgerSlice";
import { useSelector } from "react-redux";

export const CategoryPage = ({
  deleteFilters,
  deletePriceRange,
  funcApply,
  inStock,
  subcategory,
}) => {
  let initial_value = 44;
  let final_value = 100;
  let filter_counter = 6;

  const { getBurger } = burgerSlice.actions;
  const burger = useSelector((state) => state.burgerReducer.burgerHide);
  const dispatch = useDispatch();

  const [burgerHide, setBurgerHide] = useState(false);

  const [size, setSize] = useState(0);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 913) setSize(914);
    if (window.innerWidth < 913) setSize(0);
  });

  useEffect(() => {
    if (size > 913) {
      dispatch(getBurger(false));
      setBurgerHide(false);
    }
  }, [size]);

  useEffect(() => {
    // if (size > 913) {
      dispatch(getBurger(false));
      setBurgerHide(false);
    // }
  }, [size]);

  useEffect(() => {
    if (burger === false) {
      setBurgerHide(false);
    }
  }, [burger]);

  const handler = () => {
    setBurgerHide(!burgerHide);
    dispatch(getBurger(false));
  };

  const buttonHandler = () => {
    setBurgerHide(true);
    dispatch(getBurger());
  };

  burgerHide
    ? document.body.setAttribute("style", "overflow: hidden; position: fixed;")
    : document.body.setAttribute("style", "overflow: visible; position: static;");

  return (
    <Container>
      <div className={burgerHide ? s.popUp : ""} onClick={() => handler()}></div>
      <div className={s.category_page}>
        <div className={s.filter}>
          <div className={s.button_filter}>
            <p className={s.text_filter}>Фильтр</p>
          </div>

          <Button
            medium
            background="gray"
            className={s.button_filter_media}
            handler={() => buttonHandler()}
          >
            <p className={s.text_filter}>Фильтр</p>
          </Button>

          <div className={s.filter_none}>
            <InputRange />
            <div className={s.list_block}>
              <ul className={s.ul_subcategory}>
                <li className={s.li_subcategory}>{subcategory}</li>
              </ul>
            </div>
            <div className={s.stock}>
              <Toggle M onChange={inStock} />
              <p>В наличии</p>
            </div>
            <Button small background="orange" className={s.btn_apply} onClick={funcApply}>
              Применить
            </Button>
          </div>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <div className={s.deletebtn_block}>
            <div className={s.btn_quantity}>
              <div className={s.green_block}>
                <p className={s.text_green}>Фильтр {filter_counter} </p>
                <button className={s.cross_green} onClick={deleteFilters}>
                  ✕
                </button>
              </div>
            </div>
            <div className={s.btn_price}>
              <div className={s.green_block}>
                <p className={s.text_green}>
                  Цена от {initial_value} до {final_value}
                </p>
                <button className={s.cross_green} onClick={deletePriceRange}>
                  ✕
                </button>
              </div>
            </div>
            <div className={s.btn_delete}>
              <div className={s.gray_block}>
                <p className={s.text_gray}>Очистить фильтры</p>
                <button className={s.cross_gray}>✕</button>
              </div>
            </div>
          </div>

          <GridWrapper />
          <Button large background="gray" className={s.btn_show}>
            Показать ещё
          </Button>
        </div>
      </div>
    </Container>
  );
};
