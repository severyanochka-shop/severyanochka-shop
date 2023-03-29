import React from "react";
import { Basket } from "../../components/Basket/Basket";
import { Title } from "../../layout/Title/Title";
import { Section } from "../../layout/Section/Section";
import { Discount } from "../../ui/Discount/Discount";
import { CardProductBasket } from "../../components/CardProductBasket/CardProductBasket";
import s from "./Cart.module.scss";
import { useSelector } from "react-redux";

export const Cart = () => {
  const { data } = useSelector((state) => state.dataReducer);
  let text = data.reduce((sum) => {
    return sum + 1;
  }, 0);
  return (
    <Section>
      <div className={s.title_wrapper}>
        <Title>Корзина</Title>
        <Discount orange large className={s.count_product} text={text} />
      </div>

      <Basket />
      <CardProductBasket inStock />
    </Section>
  );
};

export default Cart;
