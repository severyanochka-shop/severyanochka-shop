import React, { useEffect, useState } from "react";
import { Container } from "../../layout/Container/Container";
import { GridWrapper } from "../../layout/GridWrapper/GridWrapper";
import { Button } from "../../ui/Button/Button";
import { InputRange } from "../../ui/InputRange/InputRange";
import { Toggle } from "../../ui/Toggle/Toggle";
import cl from "./CategoryPage.module.scss";
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
      <div className={burgerHide ? cl.popUp : ""} onClick={() => handler()}></div>
      <div className={cl.category_page}>
        <div className={cl.filter}>
          <Button medium background="gray" className={cl.button_filter} handler={() => () => {}}>
            <p className={cl.text_filter}>Фильтр</p>
          </Button>

          <Button
            medium
            background="gray"
            className={cl.button_filter_media}
            handler={() => buttonHandler()}
          >
            <p className={cl.text_filter}>Фильтр</p>
          </Button>

          <div className={cl.filter_none}>
            <InputRange />
            <div className={cl.list_block}>
              <ul className={cl.ul_subcategory}>
                <li className={cl.li_subcategory}>{subcategory}</li>
              </ul>
            </div>
            <div className={cl.stock}>
              <Toggle M onChange={inStock} />
              <p>В наличии</p>
            </div>
            <Button small background="orange" className={cl.btn_apply} onClick={funcApply}>
              Применить
            </Button>
          </div>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <div className={cl.deletebtn_block}>
            <Button small background="green" className={cl.btn_quantity}>
              <div className={cl.green_block}>
                <p className={cl.text_green}>Фильтр {filter_counter} </p>
                <button className={cl.cross_green} onClick={deleteFilters}>
                  ✕
                </button>
              </div>
            </Button>
            <Button small background="green" className={cl.btn_price}>
              <div className={cl.green_block}>
                <p className={cl.text_green}>
                  Цена от {initial_value} до {final_value}
                </p>
                <button className={cl.cross_green} onClick={deletePriceRange}>
                  ✕
                </button>
              </div>
            </Button>
            <Button small background="gray" className={cl.btn_delete}>
              <div className={cl.green_block}>
                <p className={cl.text_gray}>Очистить фильтры</p>
                <button className={cl.cross_gray}>✕</button>
              </div>
            </Button>
          </div>
          <GridWrapper />
          <Button large background="gray" className={cl.btn_show}>
            Показать ещё
          </Button>
        </div>
      </div>
    </Container>
  );
};
