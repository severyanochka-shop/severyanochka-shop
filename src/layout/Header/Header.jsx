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

export const Header = () => {
  let array = [
    { 0: "Молоко, сыры, яйцо" },
    { 1: "Хлеб и выпечка" },
    { 2: "Фрукты и овощи" },
    { 3: "Замороженные продукты" },
    { 4: "Вода и напитки" },
    { 5: "Кондитерские изделия и сладости" },
    { 6: "Чай, кофе, какао" },
    { 7: "Бакалея" },
    { 8: "Здоровое питание" },
    { 9: "Зоотовары" },
    { 10: "Детское питание" },
    { 11: "Мясо, птица, колбасы" },
    { 12: "Непродовольственные товары" },
  ];

  const href = useHref();
  const [isButtonHover, setButtonHover] = useState(false);
  const [isMenuHover, setMenuHover] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const handleClose = () => setIsModal(!isModal);
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

  const [inputValue, setInputValue] = useState("");

  //
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [findValue, setFindValue] = useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value);
    searchSymbols(array, e.target.value);
  };

  const searchSymbols = (filter, inputValue) => {
    const regexp = new RegExp(inputValue, "ig");
    filter.forEach((element) => {
      for (let key in element) {
        const matchValue = element[key].match(regexp);
        if (matchValue === null || matchValue.join("").length < 3) return;
        else {
          console.log("ыффавыа", matchValue.join(""));
          console.log("ыффавыа", element[key]);
          let temp = element[key];
          setStart(temp.slice(0, temp.indexOf(matchValue)));
          setFindValue(matchValue);
          setEnd(temp.slice(temp.indexOf(matchValue) + matchValue.join("").length, temp.length));
        }
      }
    });
  };

  // передача value в из окна в инпут
  // const itemSearchHandler = (e) => {
  //   setInputValue(e.target.textContent);
  //   setIsOpen(!isOpen);
  // };

  const itemSearchHandler = (e) => {
    // setInputValue(e.target.textContent);
    setInputValue(start + findValue + end);
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

              {inputValue.length > 2 && isOpen ? (
                <ul className={s.list}>
                  <li className={s.list__item} onClick={(e) => itemSearchHandler(e)}>
                    <span className={s.leftFilter}>{start}</span>
                    <span className={s.symbol}>{findValue}</span>
                    <span className={s.leftFilter}>{end}</span>
                  </li>
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
