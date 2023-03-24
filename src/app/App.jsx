import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { AboutAsync as About } from "../pages/About/About.async";
import { ArticlesAsync as Articles } from "../pages/Articles/Articles.async";
import { CartAsync as Cart } from "../pages/Cart/Cart.async";
import { CatalogAsync as Catalog } from "../pages/Catalog/Catalog.async";
import { CategoryCatalogAsync as CategoryCatalog } from "../pages/CategoryCatalog/CategoryCatalog.async";
import { FavouritesAsync as Favourites } from "../pages/Favourites/Favourites.async";
import { Main } from "../pages/Main/Main";
import { NotFoundAsync as NotFound } from "../pages/NotFound/NotFound.async";
import { OrdersAsync as Orders } from "../pages/Orders/Orders.async";
import { PolicyAsync as Policy } from "../pages/Policy/Policy.async";
import { VacanciesAsync as Vacancies } from "../pages/Vacancies/Vacancies.async";
import { ContactsAsync as Contacts } from "../pages/Contacts/Contacts.async";
import { categoriesFetch, dataFetch } from "../store/reducers/ActionCreators";
import "./global/styles/global.scss";
import "./global/styles/variables.scss";
import { ScrollToTop } from "./ScrollToTop";
import { StocksAsync as Stocks } from "../pages/Stocks/Stcoks.async";
import { NewProductsAsync as NewProducts } from "../pages/NewProducts/NewProducts.async";
import { BoughtBeforeAsync as BoughtBefore } from "../pages/BoughtBefore/BoughtBefore.async";
import { ProductAsync as Product } from "../pages/Product/Product.async";

export const App = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoriesReducer);
  const { data } = useSelector((state) => state.dataReducer);

  useEffect(() => {
    dispatch(categoriesFetch());
    dispatch(dataFetch());
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
          <Layout />
        </>
      ),
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
              path: "/category/:category",
              loader: ({ params }) => {
                console.log(categories.find((el) => el.slug === params.category).name);
                return params.category;
              },
              handle: {
                crumb: (categorySlug) => (
                  <Link to={`/category/${categorySlug}`}>
                    {categories.find((el) => el.slug === categorySlug).name}
                  </Link>
                ),
              },
              children: [
                {
                  index: true,
                  element: (
                    <React.Suspense>
                      <CategoryCatalog />
                    </React.Suspense>
                  ),
                },
                {
                  path: "/category/:category/:product",
                  loader: ({ params }) => {
                    return { categorySlug: params.category, productSlug: params.product };
                  },
                  element: (
                    <React.Suspense>
                      <Product />
                    </React.Suspense>
                  ),
                  handle: {
                    crumb: ({ categorySlug, productSlug }) => (
                      <Link to={`/category/${categorySlug}/${productSlug}`}>
                        {data.find((el) => el.data.slug === productSlug).name}
                      </Link>
                    ),
                  },
                },
              ],
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
        {
          path: "/stocks",
          element: (
            <React.Suspense>
              <Stocks />
            </React.Suspense>
          ),
          handle: {
            crumb: () => <Link to="/stocks">Акции</Link>,
          },
        },
        {
          path: "/new_products",
          element: (
            <React.Suspense>
              <NewProducts />
            </React.Suspense>
          ),
          handle: {
            crumb: () => <Link to="/new_products">Новинки</Link>,
          },
        },
        {
          path: "/bought_before",
          element: (
            <React.Suspense>
              <BoughtBefore />
            </React.Suspense>
          ),
          handle: {
            crumb: () => <Link to="/bought_before">Покупали раньше</Link>,
          },
        },
        {
          path: "*",
          element: (
            <React.Suspense>
              <NotFound />
            </React.Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
