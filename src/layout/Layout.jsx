import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import s from "./Layout.module.scss";
import { Breadcrumbs } from "../ui/Breadcrumbs/Breadcrumbs";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <Breadcrumbs />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
