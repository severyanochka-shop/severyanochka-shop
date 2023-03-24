import clsx from "clsx";
import React, { useEffect, useState } from "react";
import s from "./InputRange.module.scss";

export const InputRange = ({ min = 0, max = 1000, burger }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleClick = (e) => {
    setMinValue(min);
    setMaxValue(max);
  };

  const getBackgroundSizeMin = () => {
    return {
      backgroundSize: `${(minValue * 100) / max - min + 2}% 100%`,
    };
  };

  const getBackgroundSizeMax = () => {
    return {
      backgroundSize: `${(maxValue * 100) / max - min}% 100%`,
    };
  };

  useEffect(() => {
    if (minValue < min) setMinValue(min);
  }, [minValue]);

  useEffect(() => {
    if (maxValue > max) setMaxValue(max);
  }, [maxValue]);

  const handlerRangeMin = (e) => {
    if (+e.target.value <= maxValue) setMinValue(e.target.value);
    else setMinValue(maxValue);
  };

  const handlerRangeMax = (e) => {
    if (+e.target.value >= minValue) setMaxValue(e.target.value);
    else setMaxValue(minValue);
  };

  return (
    <div className={burger? clsx(s.range, s.range__burger): s.range}>
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
          value={minValue ? minValue : min}
          onChange={handlerRangeMin}
        />
        <div className={s.range__price__dach}></div>
        <input
          type="number"
          className={s.range__price__cell}
          value={maxValue ? maxValue : minValue ? minValue : 0}
          onChange={handlerRangeMax}
        />
      </div>
      <div className={s.range__wrapper}>
        <input
          id="min"
          onChange={handlerRangeMin}
          value={minValue ? minValue : min}
          type="range"
          className={burger? clsx(s.range__input_min, s.range__input_min_burger) : s.range__input_min}
          min={min}
          max={max}
          step={1}
          style={getBackgroundSizeMax()}
        />
        <input
          id="max"
          onChange={handlerRangeMax}
          value={maxValue ? maxValue : minValue ? minValue : 0}
          type="range"
          className={burger? clsx(s.range__input_max, s.range__input_max_burger) : s.range__input_max}
          min={min}
          max={max}
          step={1}
          style={getBackgroundSizeMin()}
        />
      </div>
    </div>
  );
};
