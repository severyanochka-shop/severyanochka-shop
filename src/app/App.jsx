import React from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { AboutAsync as About } from "../pages/About/About.async";
import { ArticlesAsync as Articles } from "../pages/Articles/Articles.async";
import { CartAsync as Cart } from "../pages/Cart/Cart.async";
import { CatalogAsync as Catalog } from "../pages/Catalog/Catalog.async";
import { CategoryCatalogAsync as CategoryCatalog } from "../pages/CategoryCatalog/CategoryCatalog.async";
import { FavouritesAsync as Favourites } from "../pages/Favourites/Favourites.async";
import { Main } from "../pages/Main/Main";
import { OrdersAsync as Orders } from "../pages/Orders/Orders.async";
import { PolicyAsync as Policy } from "../pages/Policy/Policy.async";
import { VacanciesAsync as Vacancies } from "../pages/Vacancies/Vacancies.async";
import { ContactsAsync as Contacts } from "../pages/Сontacts/Contacts.async";
import "./global/styles/global.scss";
import "./global/styles/variables.scss";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      handle: {
        crumb: () => <Link to="/">Главная</Link>,
      },
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: "/favourites",
          element: (
            <React.Suspense>
              <Favourites />
            </React.Suspense>
          ),
          handle: {
            crumb: () => <Link to="/favourites">Избранное</Link>,
          },
        },
        {
          path: "/orders",
          element: (
            <React.Suspense>
              <Orders />
            </React.Suspense>
          ),
          handle: {
            crumb: () => <Link to="/orders">Заказы</Link>,
          },
        },
        {
          path: "/cart",
          element: (
            <React.Suspense>
              <Cart />
            </React.Suspense>
          ),
          handle: {
            crumb: () => <Link to="/cart">Корзина</Link>,
          },
        },
        {
          path: "/category",
          handle: {
            crumb: () => <Link to="/category">Каталог</Link>,
          },
          children: [
            {
              index: true,
              element: (
                <React.Suspense>
                  <Catalog />
                </React.Suspense>
              ),
            },
            {
              path: "/category/milk",
              element: (
                <React.Suspense>
                  <CategoryCatalog />
                </React.Suspense>
              ),
              handle: {
                crumb: () => <Link to="/category/milk">Молоко</Link>,
              },
            },
          ],
        },
        {
          path: "/about",
          element: (
            <React.Suspense>
              <About />
            </React.Suspense>
          ),
          handle: {
            crumb: () => <Link to="/about">О компании</Link>,
          },
        },
        {
          path: "/contacts",
          element: (
            <React.Suspense>
              <Contacts />
            </React.Suspense>
          ),
          handle: {
            crumb: () => <Link to="/contacts">Контакты</Link>,
          },
        },
        {
          path: "/articles",
          element: (
            <React.Suspense>
              <Articles />
            </React.Suspense>
          ),
          handle: {
            crumb: () => <Link to="/articles">Статьи</Link>,
          },
        },
        {
          path: "/vacancies",
          element: (
            <React.Suspense>
              <Vacancies />
            </React.Suspense>
          ),
          handle: {
            crumb: () => <Link to="/vacancies">Вакансии</Link>,
          },
        },
        {
          path: "/policy",
          element: (
            <React.Suspense>
              <Policy />
            </React.Suspense>
          ),
          handle: {
            crumb: () => <Link to="/policy">Политика обработки персональных данных</Link>,
          },
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
