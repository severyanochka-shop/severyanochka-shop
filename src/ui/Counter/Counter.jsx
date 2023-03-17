import React, { useState }  from 'react'
import cl from './Counter.module.scss'


export const Counter = ({}) => {
const [state, setState] = useState(1);


  const increment = () => {
    return setState(state + 1);
  };

    const decrement = () => {
      if (state>1)
    return setState(state - 1);
};
let count = state;
  return (
    <div className={cl.counter}>
      <button className={cl.minus} onClick={decrement}>
        —
      </button>
      <p className={cl.count}>{count}</p>
      <button className={cl.plus} onClick={increment}>
        ╋
      </button>
    </div>
  );
};
