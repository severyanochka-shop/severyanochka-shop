import React from "react";
import s from "./Header.module.scss";
import logo from "./images/logo.svg";
import menu from "./images/menu.svg";
import favorites from "./images/favorites.svg";
import orders from "./images/orders.svg";
import cart from "./images/cart.svg";
import avatar from "./images/avatar.png";
import { Button } from "../../ui/Button/Button";

export const Header = () => {
  return (
    <>
      <div className={s.header}>
        <Link to="/">
          <Button text="Каталог" />{" "}
        </Link>
      </div>
    </>
  );
};
