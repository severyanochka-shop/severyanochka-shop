import React from "react";
import s from "./PaginationComponent.module.scss";
import start from "./assets/start.svg";
import prev from "./assets/prev.svg";
import next from "./assets/next.svg";
import end from "./assets/end.svg";

export const PaginationComponent = () => {
  return (
    <div className={s.pagination}>
      <button className={s.pagination__button}>
        <img src={start} alt="<<" className={s.pagination__image} />
      </button>
      <button className={s.pagination__button}>
        <img src={prev} alt="<" className={s.pagination__image} />
      </button>
      <button className={s.pagination__button}>1</button>
      <button className={s.pagination__button}>2</button>
      <button className={s.pagination__button}>3</button>
      <button className={s.pagination__button}>4</button>
      <button className={s.pagination__button}>5</button>
      <button className={s.pagination__button}>6</button>
      <button className={s.pagination__button}>7</button>
      <button className={s.pagination__button}>8</button>
      <button className={s.pagination__button}>
        <img src={next} alt=">" className={s.pagination__image} />
      </button>
      <button className={s.pagination__button}>
        <img src={end} alt=">>" className={s.pagination__image} />
      </button>
    </div>
  );
};
