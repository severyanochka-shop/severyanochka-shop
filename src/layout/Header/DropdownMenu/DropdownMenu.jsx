import React from "react";
import { Link } from "react-router-dom";
import s from "./DropdownMenu.module.scss";
import { Container } from "../../Container/Container";
import axios from "axios";
import useSWR from "swr";
import { Spinners } from "../../../ui/Spinners/Spinners";
import { Error } from "../../../layout/Error/Error";

export const DropdownMenu = ({ onMenuEnterHandler, onMenuLeaveHandler }) => {
  const fetcher = (url) => axios({ url }).then((res) => res.data.data);
  const { data, error, isLoading } = useSWR("http://codeine.tech:3000/api/categories/", fetcher);

  return (
    <div className={s.menu} onMouseEnter={onMenuEnterHandler} onMouseLeave={onMenuLeaveHandler}>
      {!!isLoading && <Spinners type="circle" />}
      {!!error && <Error />}
      {!!data && (
        <Container>
          <ul className={s.list}>
            {data.map((el, i) => (
              <li className={s[`area${i}`]} key={el.id}>
                <Link
                  to={`/category/${el.id}`}
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
