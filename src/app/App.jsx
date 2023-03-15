import React from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Catalog } from "../pages/Catalog/Catalog";
import { Main } from "../pages/Main/Main";
import "./global/styles/global.scss";
import "./global/styles/variables.scss";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      handle: {
        crumb: () => <Link to="/">Главная</Link>,
      },
    },
    {
      path: "category",
      element: <Catalog />,
      handle: {
        crumb: () => <Link to="/category">Каталог</Link>,
      },
    },
  ]);
  return <RouterProvider router={router} />;
};
