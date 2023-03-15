import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import s from "./Layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  );
};
