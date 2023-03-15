import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import s from "./Layout.module.scss";
import { Breadcrumbs } from "../ui/Breadcrumbs/Breadcrumbs";

export const Layout = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <Breadcrumbs />
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  );
};
