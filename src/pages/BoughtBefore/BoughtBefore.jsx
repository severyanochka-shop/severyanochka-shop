import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../layout/Container/Container";
import { GridWrapper } from "../../layout/GridWrapper/GridWrapper";
import { Title } from "../../layout/Title/Title";

export const BoughtBefore = () => {
  const { data } = useSelector((state) => state.dataReducer);

  return (
    <Container>
      <Title>Покупали раньше</Title>
      <GridWrapper data={data} />
    </Container>
  );
};

export default BoughtBefore;
