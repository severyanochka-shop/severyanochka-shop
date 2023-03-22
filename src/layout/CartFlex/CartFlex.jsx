import React from 'react'
import { CardProductBasket } from '../../components/CardProductBasket/CardProductBasket'
import cl from './CartFlex.module.scss'
import { useSelector } from "react-redux";

export const CartFlex = () => {
const { data } = useSelector((state) => state.dataReducer);

  return (
    <div className={cl.cart}>
      {data.map((el) => (
        <CardProductBasket
          name={el.name}
          image={el.image_small}
          price_usual={el.priceRegular}
          price_discount={el.priceWithCard}
          inStock
                  />
      ))}
    </div>
  );
}
