import React from "react";
import { Container } from "../../layout/Container/Container";
import { GridWrapper } from "../../layout/GridWrapper/GridWrapper";
import { Title } from "../../layout/Title/Title";

export const BoughtBefore = () => {
  return (
    <Container>
      <Title>Покупали раньше</Title>
      <GridWrapper />
    </Container>
  );
};

export default BoughtBefore;
