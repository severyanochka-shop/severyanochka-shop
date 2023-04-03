import React from "react";
import { useSelector } from "react-redux";
import { GridWrapper } from "../../layout/GridWrapper/GridWrapper";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";

const Favourites = () => {
  const { data } = useSelector((state) => state.dataReducer);

  return (
    <Section>
      <Title>Избранное</Title>
      <GridWrapper data={data} />
    </Section>
  );
};

export default Favourites;
