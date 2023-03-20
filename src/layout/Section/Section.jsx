import React from "react";
import { Container } from "../Container/Container";
import clsx from "clsx";
import s from "./Section.module.scss";

export const Section = ({ children, className }) => {
  return (
    <section className={clsx(s.section, className)}>
      <Container>{children}</Container>
    </section>
  );
};
