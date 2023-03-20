import React from "react";
import { Basket } from "../../components/Basket/Basket";
import { CategoryPage } from "../../components/CategoryPage/CategoryPage";
import { FilterCategory } from "../../components/FilterCategory/FilterCategory";
import { GridWrapper } from "../../layout/GridWrapper/GridWrapper";

export const Main = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>СЕВЕРЯНОЧКА</h1>
      <CategoryPage />
      <Basket/>
    </>
  );
};
