import React from 'react'
import { Checkbox } from '../../stories/Checkbox.stories';
import product_img from './64x64.jpeg'
import cl from './CardProductBasket.module.scss'

export const CardProductBasket = () => {
  return (
      <div className={cl.card_basket}>
          <Checkbox/>
      <img src={product_img} alt="" />
    </div>
  );
}
