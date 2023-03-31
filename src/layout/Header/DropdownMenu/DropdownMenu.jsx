import React from "react";
import { Link } from "react-router-dom";
import s from "./DropdownMenu.module.scss";
import { Container } from "../../Container/Container";
import { Spinners } from "../../../ui/Spinners/Spinners";
import { Error } from "../../../layout/Error/Error";
import { useCategories } from "../../../api/hooks/useCategories";

export const DropdownMenu = ({ onMenuEnterHandler, onMenuLeaveHandler }) => {
  const { categories, error, isLoading } = useCategories();

  return (
    <div className={s.menu} onMouseEnter={onMenuEnterHandler} onMouseLeave={onMenuLeaveHandler}>
      {!!isLoading && <Spinners type="circle" />}
      {!!error && <Error />}
      {!!categories && (
        <Container>
          <ul className={s.list}>
            {categories.map((el, i) => (
              <li className={s[`area${i}`]} key={el.id}>
                <Link
                  to={`/category/${el.slug}`}
                  className={s.list__link}
                  onClick={onMenuLeaveHandler}
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      )}
    </div>
  );
};
