import React from "react";
import { Container } from "../../layout/Container/Container";
import s from "../OrdersDates/OrdersDates.module.scss";
import calendar from "./assets/calendar.svg";
import calendarWhite from "./assets/calendarwhite.svg";

export const OrdersDates = ({ text, price, time }) => {
  let options = { year: "numeric", month: "numeric", day: "numeric" };
  let date = new Date().toLocaleString("ru-RU", options);
  return (
    <Container>
      <div className={s.orders}>
        <div className={s.orders__day}>
          <p className={s.orders__date}>{date}</p>
          <p className={s.orders__time}>{time}</p>
          {text === "В процессе" && <p className={s.orders__statusInProcess}>{text}</p>}
          {text === "Не доставили" && <p className={s.orders__statusNo}>{text}</p>}
          {text === "Возврат" && <p className={s.orders__statusNo}>{text}</p>}
          {text === "Получен" && <p className={s.orders__statusYes}>{text}</p>}
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
          {text === "Не доставили" && <button className={s.orders__btn_order}>Заказать</button>}
          {text === "Возврат" && <button className={s.orders__btn_order}>Заказать</button>}
          {text === "Получен" && <button className={s.orders__btn_order}>Заказать</button>}
        </div>
      </div>
    </Container>
  );
};
