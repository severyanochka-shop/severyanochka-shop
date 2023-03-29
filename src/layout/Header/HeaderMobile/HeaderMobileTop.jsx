import React, { useState, useEffect, useRef }from "react";
import { Link } from "react-router-dom";
import s from "./HeaderMobileTop.module.scss";
import logo_mobile from "../assets/logos/logo_mobile.svg";
import { Container } from "../../Container/Container";
import { TextField } from "../../../ui/TextField/TextField";

export const HeaderMobileTop = () => {

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

  let listCategories = [...data.categories].map((el) => el.name);
  console.log(listCategories);
  let listSubcategories = [...data.subcategories].map((el) => el.name);
  console.log(listSubcategories);

  const [inputValue, setInputValue] = useState("");

  const newListCategories = listCategories.filter((el) =>
    el.toLowerCase().includes(inputValue.toLowerCase().trim()),
  );
  const newListSubcategories = listSubcategories.filter((el) =>
    el.toLowerCase().includes(inputValue.toLowerCase().trim()),
  );

  // передача value в инпут
  const itemSearchHandler = (e) => {
    setInputValue(e.target.textContent);
    setIsOpen(!isOpen);
  };
  //скрытие выпадающего списка при автокомплите
  const [isOpen, setIsOpen] = useState(true);
  const inputClickHandler = () => {
    console.log("click input");
    setIsOpen(true);
    console.log(isOpen);
  };

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
  
  console.log(inputValue)
  console.log(isOpen)


  return (
    <>
      <div className={s.header_top}>
        <Container>
          <div className={s.nav}>
            <Link to="/">
              <img src={logo_mobile} alt="ЛОГО" className={s.logo} />
            </Link>
            {/* <TextField placeholder={"Найти товар"} className={s.header_input} mobile /> */}
            <div className={s.inputWrapper}>
            <TextField
                placeholder={"Найти товар"}
                mobile
                header_search
                handler={(e) => setInputValue(e.target.value)}
                value={inputValue}
                onClick={inputClickHandler}
              />
            </div>
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


                {/* <ul className={s.list}>
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
   
 */}

          </div>
        </Container>
      </div>
    </>
  );
};
