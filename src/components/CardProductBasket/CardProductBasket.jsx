import React from 'react'
import { Checkbox } from '../../stories/Checkbox.stories';
import { Counter } from '../../ui/Counter/Counter';
import { Discount } from '../../ui/Discount/Discount';
import product_img from './64x64.jpeg'
import clsx from "clsx";
import cl from './CardProductBasket.module.scss'

export const CardProductBasket = ({ inStock,className,  }) => {
    let product_describe = "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»";
    let price_usual = 89.99;
    let discount = 15;
    let count = 5
    let price_discount = ((price_usual *(discount/100+1) ).toFixed(2));
     const innerClassName = clsx(cl.card_basket, className, {
       [cl.card_basket__empty]: !inStock,
     });
    
    return (
      <div className={cl.wrapper}>
        <div className={innerClassName}>
          <div className={cl.check}>
            <Checkbox className={cl.product_checkbox} disabled={!inStock} />
            <img src={product_img} alt="" className={cl.product_image} />
          </div>
          <div className={cl.card_text}>
            <p className={cl.product_describe}>{product_describe}</p>
            <div className={cl.price}>
              <div>
                <p className={cl.price_discount}>{price_discount} ₽</p>
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
            {inStock ? (
              <>
                <Counter />
                <div className={cl.total}>
                  <p className={cl.total_price}>{(price_discount * count).toFixed(2)} ₽</p>
                  <p className={cl.total_cross}>{(price_usual * count).toFixed(2)} ₽</p>
                </div>
              </>
            ) : (
              <p className={cl.not_avail}>Нет в наличии</p>
            )}
          </div>
        </div>
      </div>
    );
}
