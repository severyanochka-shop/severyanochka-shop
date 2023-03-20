import React from "react";
import { Link } from "react-router-dom";
import s from "./HeaderMobileBottom.module.scss";
import login from "../images/login.svg";
import favorites from "../images/pictograms/favorites.svg";
import orders from "../images/pictograms/orders.svg";
import cart from "../images/pictograms/cart.svg";
import catalog from "../images/pictograms/catalog.svg";
import favorites_hover from "../images/pictograms/favorites_hover.svg";
import orders_hover from "../images/pictograms/orders_hover.svg";
import cart_hover from "../images/pictograms/cart_hover.svg";
import catalog_hover from "../images/pictograms/catalog_hover.svg";
import { HeaderButton } from "../HeaderButton/HeaderButton";
import { PictoButton } from "../PictoButton/PictoButton";
import { Container } from "../../Container/Container";
export const HeaderMobileBottom = () => {
  return (
    <>
      <div className={s.header_bottom}>
        <Container>
          <div className={s.nav}>
            <Link to="/category">
              <PictoButton text={"Каталог"} img={catalog} img_hover={catalog_hover} />
            </Link>
            <Link to="/favourites">
              <PictoButton text={"Избранное"} img={favorites} img_hover={favorites_hover} />
            </Link>
            <Link to="/orders">
              <PictoButton text={"Заказы"} img={orders} img_hover={orders_hover} />
            </Link>
            <Link to="/cart">
              <PictoButton text={"Корзина"} img={cart} img_hover={cart_hover} />
            </Link>
            <Link to="/login">
              <HeaderButton background="orange">
                <div className={s.button__wrapper}>
                  <img src={login} alt="->" />
                </div>
              </HeaderButton>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};
