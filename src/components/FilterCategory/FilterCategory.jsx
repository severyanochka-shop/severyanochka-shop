import React from 'react'
import { Button } from '../../ui/Button/Button'
import cl from "./FilterCategory.module.scss";
import {Toggle} from '../../ui/Toggle/Toggle'

export const FilterCategory = ({
  subcategory,
  hideFilter,
  deleteFilters,
  deletePriceRange,
  inStock,
  funcApply,
}) => {
  let filter_counter = 555;
  let initial_value = 90;
  let final_value = 333;

  return (
    <div className={cl.filter}>
      <Button medium background="gray" className={cl.button_filter} onClick={hideFilter}>
        <p className={cl.text_filter}>Фильтр</p>
      </Button>
      <Button small background="green" className={cl.btn_quantity}>
        <div className={cl.green_block}>
          <p className={cl.text_green}>Фильтр {filter_counter} </p>
          <button className={cl.cross_green} onClick={deleteFilters}>
            ✕
          </button>
        </div>
      </Button>
      <Button small background="green" className={cl.btn_price}>
        <div className={cl.green_block}>
          <p className={cl.text_green}>
            Цена от {initial_value} до {final_value}
          </p>
          <button className={cl.cross_green} onClick={deletePriceRange}>
            ✕
          </button>
        </div>
      </Button>
      <Button small background="gray" className={cl.btn_delete}>
        <div className={cl.green_block}>
          <p className={cl.text_gray}>Очистить фильтры</p>
          <button className={cl.cross_gray}>✕</button>
        </div>
      </Button>
      {/* здесь идет компонент, который делает Женя */}
      <div className={cl.list_block}>
        <ul>
          <li>{subcategory}</li>
        </ul>
      </div>
      <div className={cl.stock}>
        <Toggle M onChange={inStock} />
        <p>В наличии</p>
      </div>
      <Button small background="orange" className={cl.btn_apply} onClick={funcApply}>
        Применить
      </Button>
    </div>
  );
};
