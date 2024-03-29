import React, { useState, useEffect } from "react";
import s from "../Burger/Burger.module.scss";
import { Button } from "../../ui/Button/Button";
import { InputRange } from "../../ui/InputRange/InputRange";
import { Toggle } from "../../ui/Toggle/Toggle";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { filterCategorySlice } from "../../store/reducers/FilterCategorySlice";
import { FilterButton } from "../CategoryPage/FilterButton/FilterButton";

export const Burger = ({ data }) => {
  const dispatch = useDispatch();
  const burgerHide = useSelector((state) => state.burgerReducer.burgerHide);
  const [filterData, setFilterData] = useState([...data.products]);

  const filterCategory = useSelector((state) => state.filterCategoryReducer);
  const {
    setInitialState,
    setCountFilter,
    setAvailability,
    setMinPrice,
    setMaxPrice,
    setSubcategory,
  } = filterCategorySlice.actions;

  const initialState = {
    min: data.products.reduce((acc, el) => (acc.priceRegular < el.priceRegular ? acc : el))
      .priceRegular,
    max: data.products.reduce((acc, el) => (acc.priceRegular > el.priceRegular ? acc : el))
      .priceRegular,
    availability: false,
    subcategory: false,
  };

  const applyFilter = () => {
    setFilterData(
      [...data.products]
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
      [...data.products]
        .filter(
          (el) => !filterCategory.subcategory || el.subcategoryId === filterCategory.subcategory,
        )
        .filter((el) => !filterCategory.availability || el.stockCount > 0),
    );
  };

  const deleteFilters = () => {
    dispatch(setInitialState({ ...initialState }));
    dispatch(setCountFilter(0));
    setFilterData([...data.products]);
  };

  const inStock = () => {
    dispatch(setAvailability());
  };

  const handlerSubcategory = (subcategoryId) => {
    dispatch(setSubcategory(subcategoryId));
  };

  return (
    <div className={burgerHide ? clsx(s.wrapper, s.wrapper_hide) : s.wrapper}>
      <div className={s.filter}>
        <div className={s.button_filter}>
          <span>Фильтр</span>
        </div>

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

        <div className={s.filter_none}>
          <InputRange min={initialState.min} max={initialState.max} />
          <ul className={s.list}>
            {data.subcategories.map((el) => (
              <li
                key={el.id}
                className={clsx(s.list_item, {
                  [s.list_item_active]: el.id === filterCategory.subcategory,
                })}
                onClick={() => handlerSubcategory(el.id)}
              >
                {el.name}
              </li>
            ))}
          </ul>
          <div className={s.stock}>
            <Toggle M handler={inStock} checked={filterCategory.availability} />
            <p>В наличии</p>
          </div>
          <Button small background="orange" className={s.btn_apply} handler={applyFilter}>
            Применить
          </Button>
        </div>
      </div>
    </div>
  );
};
