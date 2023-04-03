import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./InputRange.module.scss";
import { filterCategorySlice } from "../../store/reducers/FilterCategorySlice";

export const InputRange = ({ min, max }) => {
  const dispatch = useDispatch();
  const { setMinPrice, setMaxPrice } = filterCategorySlice.actions;
  const filterCategory = useSelector((state) => state.filterCategoryReducer);

  const step = Math.floor(100 / (max - min));

  const handleClick = () => {
    dispatch(setMinPrice(min));
    dispatch(setMaxPrice(max));
  };

  useEffect(() => {
    dispatch(setMinPrice(min));
    dispatch(setMaxPrice(max));
  }, []);

  const getBackgroundSizeMin = () => {
    return {
      backgroundSize: `${((filterCategory.productsMaxPrice - min) * 100) / (max - min)}% 100%`,
    };
  };

  const getBackgroundSizeMax = () => {
    return {
      backgroundSize: `${((filterCategory.productsMinPrice - min) * 100) / (max - min)}% 100%`,
    };
  };

  const handlerRangeMin = (e) => {
    const temp = +e.target.value;
    if (temp > filterCategory.productsMaxPrice)
      dispatch(setMinPrice(filterCategory.productsMaxPrice));
    else if (temp < min) dispatch(setMinPrice(min));
    else dispatch(setMinPrice(temp));
  };

  const handlerRangeMax = (e) => {
    const temp = +e.target.value;
    if (temp < filterCategory.productsMinPrice)
      dispatch(setMaxPrice(filterCategory.productsMinPrice));
    else if (temp > max) dispatch(setMaxPrice(max));
    else dispatch(setMaxPrice(temp));
  };

  return (
    <div className={s.range}>
      <div className={s.range__roof}>
        <p className={s.range__text}>Цена</p>
        <button className={s.range__btn} onClick={handleClick}>
          Очистить
        </button>
      </div>
      <div className={s.range__price}>
        <input
          type="number"
          className={s.range__price__cell}
          value={filterCategory.productsMinPrice}
          onChange={handlerRangeMin}
        />
        <div className={s.range__price__dach}></div>
        <input
          type="number"
          className={s.range__price__cell}
          value={filterCategory.productsMaxPrice}
          onChange={handlerRangeMax}
        />
      </div>
      <div className={s.range__wrapper}>
        <input
          id="min"
          onChange={handlerRangeMin}
          value={filterCategory.productsMinPrice}
          type="range"
          className={s.range__input_min}
          min={min}
          max={max}
          step={step}
          style={getBackgroundSizeMin()}
        />
        <input
          id="max"
          onChange={handlerRangeMax}
          value={filterCategory.productsMaxPrice}
          type="range"
          className={s.range__input_max}
          min={min}
          max={max}
          step={step}
          style={getBackgroundSizeMax()}
        />
      </div>
    </div>
  );
};
