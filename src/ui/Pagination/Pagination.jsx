import React from "react";
import s from "./Pagination.module.scss";
import start from "./assets/start.svg";
import prev from "./assets/prev.svg";
import next from "./assets/next.svg";
import end from "./assets/end.svg";
import { useDispatch, useSelector } from "react-redux";
import { paginationSlice } from "../../store/reducers/PaginationSlice";
import clsx from "clsx";

export const Pagination = ({ count }) => {
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.paginationReducer);
  const { setPage, setOffset } = paginationSlice.actions;

  const pages = new Array(count > 8 ? 8 : count).fill(pagination.page);

  const handlerPage = (i) => {
    dispatch(setOffset(6));
    dispatch(setPage(i));
  };

  return (
    <div className={s.pagination}>
      <button className={s.pagination__button}>
        <img src={start} alt="<<" className={s.pagination__image} />
      </button>
      <button className={s.pagination__button}>
        <img src={prev} alt="<" className={s.pagination__image} />
      </button>
      {pages.map((_, i) => (
        <button
          key={i}
          className={clsx(s.pagination__button, {
            [s.pagination__button_active]: i === pagination.page,
          })}
          onClick={() => handlerPage(i)}
        >
          {i + 1}
        </button>
      ))}

      <button className={s.pagination__button}>
        <img src={next} alt=">" className={s.pagination__image} />
      </button>
      <button className={s.pagination__button}>
        <img src={end} alt=">>" className={s.pagination__image} />
      </button>
    </div>
  );
};
