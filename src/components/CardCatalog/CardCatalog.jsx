import React from 'react'
import cl from './CardCatalog.module.scss'
import product from './300x300.jpeg'

export const CardCatalog = () => {
  return (
    <div className={cl.card}>
      <img src={product} alt="" className={cl.image} />
      <div className={cl.info}>
        <div className={cl.price}>
          <p>670,90</p>
          <p>₽</p>
        </div>
        <p>Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
      </div>
    </div>
  );
}
