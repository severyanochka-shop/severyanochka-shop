import React from "react";
import { CardCatalog } from "../../components/CardCatalog/CardCatalog";
import cl from "./GridWrapper.module.scss";
import { useSelector } from "react-redux";

export const GridWrapper = () => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <div className={cl.grid_wrapper}>
      {data.map((el) => (
        <CardCatalog key={el.data.slug} el={el.data} />
      ))}
    </div>
  );
};
