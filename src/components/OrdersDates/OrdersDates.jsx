import React from "react";
import { Container } from "../../layout/Container/Container";
import s from "../OrdersDates/OrdersDates.module.scss";
import calendar from "./assets/calendar.svg";
import calendarWhite from "./assets/calendarwhite.svg";
import clsx from "clsx";

export const OrdersDates = ({ text, price, time }) => {
  let options = { year: "numeric", month: "numeric", day: "numeric" };
  let date = new Date().toLocaleString("ru-RU", options);
      const innerClassName = clsx({
        [s.orders__statusInProcess]: text === "В процессе",
        [s.orders__statusNo]: text === "Не доставили" || text === "Возврат",
        [s.orders__statusYes]: text === "Получен",
      });
        const rightClassName = clsx({
          [s.orders__btn_order]: text === "Не доставили" || text === "Возврат" || text === "Получен",
        });

  return (
    <Container>
      <div className={s.orders}>
        <div className={s.orders__day}>
          <p className={s.orders__date}>{date}</p>
          <p className={s.orders__time}>{time}</p>
          <p className={innerClassName}>{text}</p>
        </div>
        <div className={s.orders__right}>
          <p className={s.orders__price}>{price} ₽</p>
          {text === "В процессе" && (
            <button className={s.orders__btn_get}>
              <img src={calendar} alt="cal" className={s.orders__calendar} />
              <p>Когда доставить</p>
            </button>
          )}
          {text === "В процессе" && (
            <button className={s.orders__btn_getsmall}>
              <img src={calendarWhite} alt="cal" className={s.orders__calendar_white} />
              <p>Когда</p>
            </button>
          )}
          {(text === "Не доставили" || text === "Возврат" || text === "Получен") &&
            (<button className={rightClassName}>Заказать</button>)
          }
        </div>
      </div>
    </Container>
  );
};
