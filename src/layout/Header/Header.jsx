import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useHref } from "react-router-dom";
import s from "./Header.module.scss";
import logo_desktop from "./assets/logos/logo_desktop.svg";
import logo_tablet from "./assets/logos/logo_tablet.svg";
import menu from "./assets/menu.svg";
import login from "./assets/login.svg";
import favorites from "./assets/pictograms/favorites.svg";
import orders from "./assets/pictograms/orders.svg";
import cart from "./assets/pictograms/cart.svg";
import favorites_hover from "./assets/pictograms/favorites_hover.svg";
import orders_hover from "./assets/pictograms/orders_hover.svg";
import cart_hover from "./assets/pictograms/cart_hover.svg";
import { HeaderButton } from "./HeaderButton/HeaderButton";
import { PictoButton } from "./PictoButton/PictoButton";
import { Container } from "../Container/Container";
import { TextField } from "../../ui/TextField/TextField";
import { DropdownMenu } from "./DropdownMenu/DropdownMenu";
import { Modal } from "../Modal/Modal";
import { AuthorizationForm } from "../../components/Form/AuthorizationForm/AuthorizationForm";
import axios from "axios";
import useSWR from "swr";

export const Header = () => {

  const fetcher = (url) => axios({ url }).then((res) => res.data.data);
  const { info, error, isLoading } = useSWR(
    "http://codeine.tech:3000/api/categories/3ed82cc0-9d71-46ec-97d0-365121844a40",
    fetcher,
  );

    // console.log(info )

  const data = {
    categories: [
      {
        name: "Молоко, сыр, сметана",
        id: "bb577846-623f-400b-be19-bbf6446600d8",
      },
      {
        name: "что-то",
        id: "1",
      },
    ],
    subcategories: [
      {
        name: "Молоко",
        id: "bb577846-622f-400b-b119-bbf6446600d8",
      },
    ],
    products: [
      {
        name: "Молоко Простоквашино",
        id: "bb577846-622f-400b-b199-bbf6446600d8",
      },
      {
        name: "Молоко Вкуснотеево",
        id: "bb577846-622f-400b-b119-bbf6456600d8",
      },
      {
        name: "Молоко Домик в деревне",
        id: "bb577846-622f-400b-b119-b2f6446600d8",
      },
      {
        name: "Молоко Валио",
        id: "bb577846-622f-400b-b119-bbf6411100d8",
      },
    ],
  };

  const href = useHref();
  const [isButtonHover, setButtonHover] = useState(false);
  const [isMenuHover, setMenuHover] = useState(false);

  const [isModal, setIsModal] = useState(false);
  const handleClose = () => {
    setIsModal(!isModal);
  };

  const onButtonEnterHandler = () => setButtonHover(true);

  const onButtonLeaveHandler = () =>
    setTimeout(() => {
      if (!isMenuHover) setButtonHover(false);
    }, 200);

  const onMenuEnterHandler = () => {
    document.body.style.overflow = "hidden";
    setMenuHover(true);
  };

  const onMenuLeaveHandler = () => {
    document.body.style.overflow = "visible";
    setMenuHover(false);
    setButtonHover(false);
  };

  let listCategories = [...data.categories].map((el) => el.name);
  let listSubcategories = [...data.subcategories].map((el) => el.name);

  const [inputValue, setInputValue] = useState("");

  const newListCategories = listCategories.filter((el) =>
    el.toLowerCase().includes(inputValue.toLowerCase().trim()),
  );
  const newListSubcategories = listSubcategories.filter((el) =>
    el.toLowerCase().includes(inputValue.toLowerCase().trim()),
  );

  //поиск символов
  const [symbol, setSymbol] = useState("");
  console.log("символ", symbol);
  const [leftFilter, setLeftFilter] = useState(newListCategories);
  console.log(leftFilter);

  //


  const inputHandler = (e) => {
    setInputValue(e.target.value);
    searchSymbols(newListCategories, e.target.value);
  };

  const searchSymbols = (filter, inputValue) => {
    if (!filter) return;
    const regexp = new RegExp(inputValue, "ig");
    console.log(regexp);
    console.log("inputvalue", inputValue);
    if (filter[0] === undefined) return ;
    const matchValue = filter[0].match(inputValue);
    console.log("filter", filter[0]);
    console.log("matchValue", matchValue);
    if (matchValue === null) return setSymbol("");
    else {
      console.log(matchValue.join(""));
      let a = newListCategories[0];
      console.log(a.slice(matchValue.length, a.length));
      setSymbol(matchValue.join(""));
      console.log(symbol);
      setLeftFilter(a.slice(symbol.length, a.length))
    }
  };

  useEffect(() => {
    if (newListCategories[0] === undefined) return;
    let a = newListCategories[0];
    setLeftFilter(a.slice(symbol.length, a.length));
    console.log("leftFilter", leftFilter);
  }, [symbol]);

  // передача value в из окна в инпут
  const itemSearchHandler = (e) => {
    setInputValue(e.target.textContent);
    setIsOpen(!isOpen);
  };

  //скрытие выпадающего списка при автокомплите
  const [isOpen, setIsOpen] = useState(true);
  const inputClickHandler = () => setIsOpen(true);

  //скрытие выпадающего списка при клике вне поля
  const dropDownRef = useRef(null);

  useEffect(() => {
    if (isOpen === false) return;
    const handleClick = (e) => {
      if (!dropDownRef.current) return;
      if (!dropDownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  //выделение текста
  const highlight = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      {(isButtonHover || isMenuHover) && href !== "/category" && (
        <DropdownMenu
          onMenuEnterHandler={onMenuEnterHandler}
          onMenuLeaveHandler={onMenuLeaveHandler}
        />
      )}
      <div className={s.header}>
        <Container>
          <div className={s.nav}>
            <Link to="/">
              <picture>
                <source media="(max-width: 1279px)" srcSet={logo_tablet} sizes="1279px" />
                <source media="(min-width: 1280px)" srcSet={logo_desktop} sizes="1280px" />
                <img src={logo_desktop} alt="ЛОГО" className={s.logo} />
              </picture>
            </Link>
            <Link to="/category">
              <HeaderButton
                background="green"
                onButtonEnterHandler={onButtonEnterHandler}
                onButtonLeaveHandler={onButtonLeaveHandler}
              >
                <div className={s.button__wrapper}>
                  <img src={menu} alt="|||" />
                  <span className={s.button__text}>Каталог</span>
                </div>
              </HeaderButton>
            </Link>
            <div className={s.inputWrapper} ref={dropDownRef}>
              <TextField
                placeholder={"Найти товар"}
                header
                header_search
                handler={(e) => inputHandler(e)}
                value={inputValue}
                onClick={inputClickHandler}
              />

              {inputValue && isOpen ? (
                <ul className={s.list}>
                  {/* {newListCategories.map((el) => (
                    <li className={s.list__item} onClick={(e) => itemSearchHandler(e)}>
                      <span className={s.symbol}>{`${symbol}`}</span>
                      <span className={s.leftFilter}>{`${leftFilter}`}</span>
                    </li>
                  ))} */}

                  {newListCategories.map((el) => (
                    <li className={s.list__item} onClick={(e) => itemSearchHandler(e)}>
                      <span className={s.symbol}>{`${symbol}`}</span>
                      <span className={s.leftFilter}>{`${leftFilter}`}</span>
                    </li>
                  ))}

                  {/* {newListSubcategories.map((el) => (
                    <li className={s.list__item} onClick={(e) => itemSearchHandler(e)}>
                      {newListSubcategories}
                    </li>
                  ))} */}

                  {newListSubcategories.map((el) => (
                    <li className={s.list__item} onClick={(e) => itemSearchHandler(e)}>
                      {newListSubcategories}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <Link to="/favourites">
              <PictoButton text={"Избранное"} img={favorites} img_hover={favorites_hover} />
            </Link>
            <Link to="/orders">
              <PictoButton text={"Заказы"} img={orders} img_hover={orders_hover} />
            </Link>
            <Link to="/cart">
              <PictoButton text={"Корзина"} img={cart} img_hover={cart_hover} />
            </Link>
            <HeaderButton background="orange" onClick={handleClose}>
              <div className={`${s.button__wrapper} ${s.large}`}>
                <span className={s.button__text}>Войти</span>
                <img src={login} alt="->" />
              </div>
            </HeaderButton>
          </div>
        </Container>
        {isModal && <Modal handleClose={handleClose} children={<AuthorizationForm />} />}
      </div>
    </>
  );
};
