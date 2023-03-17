import React, { useState } from "react";
import s from "./InputRange.module.scss";

export const InputRange = (props) => {
  const { min = 1, max = 1000 } = props;
  const [value, setValue] = useState(min);
  const [secValue, setSecValue] = useState(max);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const sechandleChange = (e) => {
    setSecValue(e.target.value);
  };

  const handleClick = (e) => {
    setValue(min);
    setSecValue(max);
    document.getElementById("min").value = min.toString();
    document.getElementById("max").value = max.toString();
  };

  const sliderControl = (e) => {
    let from = document.getElementById("min").value;
    let to = document.getElementById("max").value;
    if (Number(from) >= Number(to)) {
      document.getElementById("max").value =
        document.getElementById("min").value;
      setSecValue(String(to));
    }
  };

  const sliderControlMax = (e) => {
    let from = document.getElementById("min").value;
    let to = document.getElementById("max").value;
    if (Number(to) <= Number(from)) {
      document.getElementById("min").value =
        document.getElementById("max").value;
      setValue(String(from));
    }
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
        <div className={s.range__price__cell}>{value}</div>
        <div className={s.range__price__dach}></div>
        <div className={s.range__price__cell}>{secValue}</div>
      </div>
      <div style={{ display: "flex", position: "relative" }}>
        <input
          id="min"
          onChange={(e) => {
            handleChange(e);
            sliderControl(e);
          }}
          type="range"
          className={s.range__input}
          min={min}
          max={max}
          step="1"
          defaultValue={min}
        />
        <input
          id="max"
          onChange={(e) => {
            sechandleChange(e);
            sliderControlMax(e);
          }}
          type="range"
          className={s.range__input}
          min={min}
          max={max}
          step="1"
          defaultValue={max}
        />
      </div>
    </div>
  );
};
