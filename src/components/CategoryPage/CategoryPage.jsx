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
import clsx from "clsx";
import { FilterButton } from "./FilterButton/FilterButton";

export const CategoryPage = ({ category }) => {
  const dispatch = useDispatch();

  const { getBurger } = burgerSlice.actions;
  const burger = useSelector((state) => state.burgerReducer.burgerHide);

  const filterCategory = useSelector((state) => state.filterCategoryReducer);
  const {
    setInitialState,
    setCountFilter,
    setAvailability,
    setMinPrice,
    setMaxPrice,
    setSubcategory,
  } = filterCategorySlice.actions;

  const [burgerHide, setBurgerHide] = useState(false);
  const [size, setSize] = useState(0);

  const [filterData, setFilterData] = useState([...category.products]);

  const initialState = {
    min: category.products.reduce((acc, el) => (acc.priceRegular < el.priceRegular ? acc : el))
      .priceRegular,
    max: category.products.reduce((acc, el) => (acc.priceRegular > el.priceRegular ? acc : el))
      .priceRegular,
    availability: false,
    subcategory: false,
  };

  const applyFilter = () => {
    setFilterData(
      [...category.products]
        .filter(
          (el) => !filterCategory.subcategory || el.subcategoryId === filterCategory.subcategory,
        )
        .filter((el) => el.priceRegular >= filterCategory.minPrice)
        .filter((el) => el.priceRegular <= filterCategory.maxPrice)
        .filter((el) => !filterCategory.availability || el.stockCount > 0),
    );
    let countFilter = 0;
    if (
      filterCategory.minPrice !== initialState.min ||
      filterCategory.maxPrice !== initialState.max
    )
      countFilter++;
    if (filterCategory.availability) countFilter++;
    if (filterCategory.subcategory) countFilter++;
    dispatch(setCountFilter(countFilter));
  };

  useEffect(() => {
    dispatch(setInitialState({ ...initialState }));
  }, []);

  useEffect(() => {
    let countFilter = 0;
    if (
      filterCategory.minPrice !== initialState.min ||
      filterCategory.maxPrice !== initialState.max
    )
      countFilter++;
    if (filterCategory.availability) countFilter++;
    if (filterCategory.subcategory) countFilter++;
    dispatch(setCountFilter(countFilter));
  }, [filterData]);

  const deletePriceRange = () => {
    dispatch(setMinPrice(initialState.min));
    dispatch(setMaxPrice(initialState.max));

    setFilterData(
      [...category.products]
        .filter(
          (el) => !filterCategory.subcategory || el.subcategoryId === filterCategory.subcategory,
        )
        .filter((el) => !filterCategory.availability || el.stockCount > 0),
    );
  };

  const deleteFilters = () => {
    dispatch(setInitialState({ ...initialState }));
    dispatch(setCountFilter(0));
    setFilterData([...category.products]);
  };

  const inStock = () => {
    dispatch(setAvailability());
  };

  const handlerSubcategory = (subcategoryId) => {
    dispatch(setSubcategory(subcategoryId));
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
    ? document.body.setAttribute("style", "position: fixed; overflow-y: scroll;")
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
            <InputRange min={initialState.min} max={initialState.max} />
            <div className={s.list_block}>
              <ul className={s.ul_subcategory}>
                {category.subcategories.map((el) => (
                  <li
                    key={el.id}
                    className={clsx(s.li_subcategory, {
                      [s.li_subcategory_active]: el.id === filterCategory.subcategory,
                    })}
                    onClick={() => handlerSubcategory(el.id)}
                  >
                    {el.name}
                  </li>
                ))}
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
              <FilterButton
                color="green"
                text={`Фильтр ${filterCategory.countFilter}`}
                onClick={deleteFilters}
              />
            )}
            {(filterCategory.minPrice !== initialState.min ||
              filterCategory.maxPrice !== initialState.max) && (
              <FilterButton
                color="green"
                text={`Цена от ${filterCategory.minPrice} до ${filterCategory.maxPrice}`}
                onClick={deletePriceRange}
              />
            )}
            {!!filterCategory.countFilter && (
              <FilterButton color="gray" text="Очистить фильтры" onClick={deleteFilters} />
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
