import React from "react";
import { useProducts } from "../../api/hooks/useProducts";
import { Error } from "../../layout/Error/Error";
import { GridWrapper } from "../../layout/GridWrapper/GridWrapper";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";
import { Spinners } from "../../ui/Spinners/Spinners";

const Stocks = () => {
  const {
    products: stocks,
    errorProducts: errorStocks,
    isLoadingProducts: isLoadingStocks,
  } = useProducts({
    withDiscount: true,
  });

  return (
    <Section>
      <Title>Акции</Title>
      {!!isLoadingStocks && <Spinners type="circle" />}
      {!!errorStocks && <Error />}
      {!!stocks && <GridWrapper data={stocks.products} />}
    </Section>
  );
};

export default Stocks;
