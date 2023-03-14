import React from 'react'
import { Checkbox } from '../../stories/Checkbox.stories';
import product_img from './64x64.jpeg'
import cl from './CardProductBasket.module.scss'

export const CardProductBasket = () => {
    let product_describe = "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»";
    let price_usual = 89.99;
    let discount = 80;
  return (
    <div className={cl.card_basket}>
      <Checkbox className={cl.product_checkbox} />
      <img src={product_img} alt="" className={cl.product_image} />

      <div className={cl.card_text}>
        <p className={cl.product_describe}>{product_describe}</p>
        <div className={cl.price}>
          <div>
            <p className={cl.price_discount}>
              {(price_usual * discount) / 100} ₽
            </p>
            <p className={cl.withcard}>С картой</p>
          </div>
          <div>
            <p className={cl.price_usual}>{price_usual} ₽</p>

            <p className={cl.withoutcard}>Обычная</p>
          </div>
          <p className={cl.one}>за шт.</p>
        </div>
      </div>
    </div>
  );
}
