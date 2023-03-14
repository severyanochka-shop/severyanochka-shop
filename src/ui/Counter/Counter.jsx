import React from 'react'
import cl from './Counter.module.scss'

export const Counter = ({ handlerMinus, handlerPlus }) => {
  let count = 2;
  return (
    <div className={cl.counter}>
      <button className={cl.minus} onClick={handlerMinus}>
        —
      </button>
      <p className={cl.count}>{count}</p>
      <button className={cl.plus} onClick={handlerPlus}>
        ╋
      </button>
    </div>
  );
};
