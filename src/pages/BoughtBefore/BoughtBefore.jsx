import React from "react";
import { useProducts } from "../../api/hooks/useProducts";
import { Error } from "../../layout/Error/Error";
import { GridWrapper } from "../../layout/GridWrapper/GridWrapper";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";
import { Spinners } from "../../ui/Spinners/Spinners";

const BoughtBefore = () => {
  const {
    products: newProducts,
    errorProducts: errorNewProducts,
    isLoadingProducts: isLoadingNewProducts,
  } = useProducts({
    isNew: true,
  });

  return (
    <Section>
      <Title>Покупали раньше</Title>
      {!!isLoadingNewProducts && <Spinners type="circle" />}
      {!!errorNewProducts && <Error />}
      {!!newProducts && <GridWrapper data={newProducts.products} />}
    </Section>
  );
};

export default BoughtBefore;
