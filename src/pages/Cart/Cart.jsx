import React from "react";
import { Container } from "../../layout/Container/Container";
import { Basket } from "../../components/Basket/Basket";
import { Title } from "../../layout/Title/Title";

export const Cart = () => {
  return (
    <Container>
      <Title>Корзина</Title>
      <Basket />
    </Container>
  );
};

export default Cart;
