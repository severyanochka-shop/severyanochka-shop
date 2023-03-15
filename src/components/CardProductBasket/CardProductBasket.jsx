import React from 'react'
import { Checkbox } from '../../stories/Checkbox.stories';
import { Counter } from '../../ui/Counter/Counter';
import { Discount } from '../../ui/Discount/Discount';
import product_img from './64x64.jpeg'
import cl from './CardProductBasket.module.scss'

export const CardProductBasket = ({text}) => {
    let product_describe = "Комбайн КЗС-1218 «ffffffff-ПОЛЕСЬЕ GS12»";
    let price_usual = 89.99;
    let discount = 80;
    let total_price = 100.99;
    
  return (
    <div className={cl.card_basket}>
      <div className={cl.check}>
        <Checkbox className={cl.product_checkbox} />
        <img src={product_img} alt="" className={cl.product_image} />
      </div>
      <div className={cl.card_text}>
        <p className={cl.product_describe}>{product_describe}</p>
        <div className={cl.price}>
          <div>
            <p className={cl.price_discount}>{(price_usual * discount) / 100} ₽</p>
            <p className={cl.withcard}>С картой</p>
          </div>
          <div>
            <p className={cl.price_usual}>{price_usual} ₽</p>

            <p className={cl.withoutcard}>Обычная</p>
          </div>
          <p className={cl.one}>за шт.</p>
          <Discount orange large text="-15%" />
        </div>
      </div>

      <div className={cl.end}>
        <Counter className={cl.counter} />
        <div className={cl.total}>
          <p className={cl.total_price}>{total_price} ₽</p>
          <p className={cl.total_cross}>77.90 ₽</p>
        </div>
      </div>
    </div>
  );
}
