import React from "react";
import { CardProductBasket } from "../components/CardProductBasket/CardProductBasket";

export const Main = () => {
  return (
    <>
      <h1>СЕВЕРЯНОЧКА</h1>
      <CardProductBasket inStock={false} />
    </>
  );
};
