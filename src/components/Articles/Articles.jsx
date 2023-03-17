import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../ui/Button/Button";
import s from "./Articles.module.scss";

export const Articles = () => {
  return (
    <>
      {" "}
      <Link to="/">
        <Button border="green" className={s.article_button}>
          Подробнее
        </Button>
      </Link>
      <div className={s.card}>
        {" "}
        <Link to="/">
          <Button border="green" className={s.article_button}>
            Подробнее
          </Button>
        </Link>
      </div>
    </>
  );
};
