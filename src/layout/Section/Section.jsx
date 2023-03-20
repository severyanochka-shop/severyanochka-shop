import React from "react";
import { Container } from "../Container/Container";
import s from "./Section.module.scss";

export const Section = ({ children }) => {
  return (
    <section className={s.section}>
      <Container>{children}</Container>
    </section>
  );
};
