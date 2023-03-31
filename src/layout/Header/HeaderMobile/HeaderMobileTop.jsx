import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import s from "./HeaderMobileTop.module.scss";
import logo_mobile from "../assets/logos/logo_mobile.svg";
import { Container } from "../../Container/Container";
import { TextField } from "../../../ui/TextField/TextField";

export const HeaderMobileTop = () => {
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

  // let listCategories = [...data.categories].map((el) => el.name);
  // let listSubcategories = [...data.subcategories].map((el) => el.name);

  const [inputValue, setInputValue] = useState("");

  //
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [findValue, setFindValue] = useState("");

  // const newListCategories = listCategories.filter((el) =>
  //   el.toLowerCase().includes(inputValue.toLowerCase().trim()),
  // );
  // const newListSubcategories = listSubcategories.filter((el) =>
  //   el.toLowerCase().includes(inputValue.toLowerCase().trim()),
  // );

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
          let temp = element[key];
          setStart(temp.slice(0, temp.indexOf(matchValue)));
          setFindValue(matchValue);
          setEnd(temp.slice(temp.indexOf(matchValue) + matchValue.join("").length, temp.length));
        }
      }
    });
  };

  // передача value в инпут
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

  return (
    <>
      <div className={s.header_top}>
        <Container>
          <div className={s.nav}>
            <Link to="/">
              <img src={logo_mobile} alt="ЛОГО" className={s.logo} />
            </Link>

            <div className={s.inputWrapper} ref={dropDownRef}>
              <TextField
                placeholder={"Найти товар"}
                mobile
                header_search
                handler={(e) => inputHandler(e)}
                value={inputValue}
                onClick={inputClickHandler}
              />

              {inputValue.length > 2 && isOpen ? (
                <ul className={s.list}>
                  <li className={s.list__item} onClick={(e) => itemSearchHandler(e)}>
                    <span className={s.startWord}>{start}</span>
                    <span className={s.findWord}>{findValue}</span>
                    <span className={s.endWord}>{end}</span>
                  </li>
                </ul>
              ) : null}

              {/* {inputValue && isOpen ? (
                <ul className={s.list}>
                  {newListCategories.map((el) => (
                    <li className={s.list__item} onClick={(e) => itemSearchHandler(e)}>
                      {newListCategories}
                    </li>
                  ))}
                  {newListSubcategories.map((el) => (
                    <li className={s.list__item} onClick={(e) => itemSearchHandler(e)}>
                      {newListSubcategories}
                    </li>
                  ))}
                </ul>
              ) : null} */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
