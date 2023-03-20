import React from "react";
import { Container } from "../../layout/Container/Container";
import { Basket } from "../../components/Basket/Basket";

export const Cart = () => {
  return (
    <Container>
      <h1>Корзина</h1>
      <Basket />
    </Container>
  );
};

export default Cart;
