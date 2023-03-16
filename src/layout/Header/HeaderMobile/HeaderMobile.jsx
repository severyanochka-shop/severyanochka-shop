import React from "react";
import { HeaderMobileTop } from "./HeaderMobileTop";
import { HeaderMobileBottom } from "./HeaderMobileBottom";
import s from "./HeaderMobile.module.scss";

export const HeaderMobile = ({ children }) => {
  return (
    <>
      <HeaderMobileTop />
      <main>{children}</main>
      <HeaderMobileBottom />
    </>
  );
};
