import React, { useState } from "react";
import cl from "./Counter.module.scss";

export const Counter = () => {
  const [state, setState] = useState(1);

  const increment = () => setState(state + 1);

  const decrement = () => {
    if (state > 1) return setState(state - 1);
  };

  return (
    <div className={cl.counter}>
      <button className={cl.btn} onClick={decrement}>
        —
      </button>
      <p className={cl.count}>{state}</p>
      <button className={cl.btn} onClick={increment}>
        ╋
      </button>
    </div>
  );
};
