import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./InputRange.module.scss";
import { filterCategorySlice } from "../../store/reducers/FilterCategorySlice";

export const InputRange = ({ min, max }) => {
  const dispatch = useDispatch();
  const { setPrice, setMinPrice, setMaxPrice } = filterCategorySlice.actions;
  const filterCategory = useSelector((state) => state.filterCategoryReducer);

  const step = Math.floor(100 / (max - min));

  const handleClick = () => {
    dispatch(setPrice({ min: min, max: max }));
  };

  const getBackgroundSizeMin = () => {
    return {
      backgroundSize: `${((filterCategory.maxPrice - min) * 100) / (max - min)}% 100%`,
    };
  };

  const getBackgroundSizeMax = () => {
    return {
      backgroundSize: `${((filterCategory.minPrice - min) * 100) / (max - min)}% 100%`,
    };
  };

  const handlerRangeMin = (e) => {
    const temp = +e.target.value;
    if (temp > filterCategory.maxPrice) dispatch(setMinPrice(filterCategory.maxPrice));
    else if (temp < min) dispatch(setMinPrice(min));
    else dispatch(setMinPrice(temp));
  };

  const handlerRangeMax = (e) => {
    const temp = +e.target.value;
    if (temp < filterCategory.minPrice) dispatch(setMaxPrice(filterCategory.minPrice));
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
          value={filterCategory.minPrice}
          onChange={handlerRangeMin}
        />
        <div className={s.range__price__dach}></div>
        <input
          type="number"
          className={s.range__price__cell}
          value={filterCategory.maxPrice}
          onChange={handlerRangeMax}
        />
      </div>
      <div className={s.range__wrapper}>
        <input
          id="min"
          onChange={handlerRangeMin}
          value={filterCategory.minPrice}
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
          value={filterCategory.maxPrice}
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
