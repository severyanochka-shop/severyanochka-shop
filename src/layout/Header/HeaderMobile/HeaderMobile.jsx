import React from "react";
import { Container } from "../../Container/Container";
import { HeaderMobileTop } from "./HeaderMobileTop";
import { HeaderMobileBottom } from "./HeaderMobileBottom";
import s from "./HeaderMobile.module.scss";

export const HeaderMobile = ({ children }) => {
  return (
    <Container>
      <HeaderMobileTop />
      <main>{children}</main>
      <HeaderMobileBottom />
    </Container>
  );
};
