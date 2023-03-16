import React from 'react'
import { Button } from '../../ui/Button/Button'
import cl from "./FilterCategory.module.scss";

export const FilterCategory = () => {
  let quantity_filter = 5;
  return (
    <div className={cl.filter}>
      <Button medium background="gray" className={cl.button_filter}>
        <p className={cl.text_button}>Фильтр</p>
      </Button>
      <Button small background="green">
        <div>
          Фильтр {quantity_filter} <Button>X</Button>
        </div>
      </Button>
    </div>
  );
};
