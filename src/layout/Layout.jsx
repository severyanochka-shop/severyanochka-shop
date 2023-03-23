import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import s from "./Layout.module.scss";
import { Breadcrumbs } from "../ui/Breadcrumbs/Breadcrumbs";
import { Outlet } from "react-router-dom";
import { HeaderMobileTop } from "./Header/HeaderMobile/HeaderMobileTop";
import { HeaderMobileBottom } from "./Header/HeaderMobile/HeaderMobileBottom";
import { Delivery } from "../components/Delivery/Delivery";

export const Layout = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <HeaderMobileTop />
      <Breadcrumbs />
      <main className={s.main}>
        <Outlet />
        <Delivery />
      </main>
      <Footer />
      <HeaderMobileBottom />
    </div>
  );
};
