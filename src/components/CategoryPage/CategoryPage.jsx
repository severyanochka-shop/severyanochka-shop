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
import { filterCategorySlice } from "../../store/reducers/FilterCategorySlice";

export const CategoryPage = ({ subcategory }) => {
  const dispatch = useDispatch();
  const { getBurger } = burgerSlice.actions;
  const burger = useSelector((state) => state.burgerReducer.burgerHide);

  const { data } = useSelector((state) => state.dataReducer);

  const filterCategory = useSelector((state) => state.filterCategoryReducer);
  const { setInitialState, setCountFilter, setAvailability, setMinPrice, setMaxPrice } =
    filterCategorySlice.actions;

  const [burgerHide, setBurgerHide] = useState(false);
  const [size, setSize] = useState(0);

  const [filterData, setFilterData] = useState([...data]);

  const initialState = {
    min: data.reduce((acc, el) => (acc.data.priceRegular < el.data.priceRegular ? acc : el)).data
      .priceRegular,
    max: data.reduce((acc, el) => (acc.data.priceRegular > el.data.priceRegular ? acc : el)).data
      .priceRegular,
    availability: false,
  };

  const applyFilter = () => {
    setFilterData(
      [...data]
        .filter((el) => el.data.priceRegular >= filterCategory.minPrice)
        .filter((el) => el.data.priceRegular <= filterCategory.maxPrice)
        .filter((el) => !filterCategory.availability || el.data.stockCount > 0),
    );
  };

  useEffect(() => {
    dispatch(setInitialState({ ...initialState }));
  }, []);

  useEffect(() => {
    let countFilter = 0;
    if (filterCategory.minPrice !== initialState.min) countFilter++;
    if (filterCategory.maxPrice !== initialState.max) countFilter++;
    if (filterCategory.availability) countFilter++;
    dispatch(setCountFilter(countFilter));
  }, [filterCategory]);

  const deletePriceRange = () => {
    dispatch(setMinPrice(initialState.min));
    dispatch(setMaxPrice(initialState.max));

    setFilterData([...data].filter((el) => !filterCategory.availability || el.data.stockCount > 0));
  };

  const deleteFilters = () => {
    deletePriceRange();
    dispatch(setAvailability(false));
    setFilterData([...data]);
  };

  const inStock = () => {
    dispatch(setAvailability());
  };

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
    ? document.body.setAttribute("style", "position: fixed; overflow-y: scroll; ")
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
            <InputRange
              min={initialState.min}
              max={initialState.max}
              handler={() => applyFilter()}
            />
            <div className={s.list_block}>
              <ul className={s.ul_subcategory}>
                <li className={s.li_subcategory}>{subcategory}</li>
              </ul>
            </div>
            <div className={s.stock}>
              <Toggle M handler={inStock} checked={filterCategory.availability} />
              <p>В наличии</p>
            </div>
            <Button small background="orange" className={s.btn_apply} handler={applyFilter}>
              Применить
            </Button>
          </div>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <div className={s.deletebtn_block}>
            {!!filterCategory.countFilter && (
              <div className={s.btn_quantity}>
                <div className={s.green_block}>
                  <p className={s.text_green}>Фильтр {filterCategory.countFilter} </p>
                  <button className={s.cross_green} onClick={deleteFilters}>
                    ✕
                  </button>
                </div>
              </div>
            )}
            {(filterCategory.minPrice !== initialState.min ||
              filterCategory.maxPrice !== initialState.max) && (
              <div className={s.btn_price}>
                <div className={s.green_block}>
                  <p className={s.text_green}>
                    Цена от {filterCategory.minPrice} до {filterCategory.maxPrice}
                  </p>
                  <button className={s.cross_green} onClick={deletePriceRange}>
                    ✕
                  </button>
                </div>
              </div>
            )}
            {!!filterCategory.countFilter && (
              <div className={s.btn_delete}>
                <div className={s.gray_block}>
                  <p className={s.text_gray}>Очистить фильтры</p>
                  <button className={s.cross_gray} onClick={deleteFilters}>
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>

          <GridWrapper data={filterData} />
          <Button large background="gray" className={s.btn_show}>
            Показать ещё
          </Button>
        </div>
      </div>
    </Container>
  );
};
