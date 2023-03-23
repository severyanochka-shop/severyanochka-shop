import React from "react";
import { Select } from "../../ui/Select/Select";
import s from "./Delivery.module.scss";
import { Calculator } from "../Basket/Calculator/Calculator";

export const Delivery = () => {
  return (
    <div className={s.delivery}>
      <h4 className={s.item1__subtitle_first}>Куда</h4>
      <div className={s.delivery__flex}>
        <div className={s.item1}>
          <div className={s.wherewraper}>
            <label htmlFor="" className={s.item1__label}>
              Населенный пункт
              <Select className={s.item1__select} />
            </label>
            <label className={s.label__street} htmlFor="street">
              Улица
              <input className={s.input__street} type="text" name="street" id="" />
            </label>
            <label className={s.label__house} htmlFor="house">
              Дом
              <input className={s.input__house} type="text" name="house" id="" />
            </label>
            <label className={s.label__apart} htmlFor="apart">
              Квартира
              <input className={s.input__apart} type="text" name="apart" id="" />
            </label>
            <label className={s.label__extra} htmlFor="extra">
              Дополнительно
              <input className={s.input__extra} type="text" name="extra" id="" />
            </label>
          </div>
          <div className={s.item1__when}>
            <h4 className={s.item1__subtitle}>Когда</h4>
            <div className={s.wherewraper}>
              <label className={s.datewraper}>
                Дата
                <Select className={s.date__select} />
              </label>
              <label className={s.datebox}>
                Время
                <div className={s.time}>
                  <button className={s.item1__when__time}>8:00-14:00</button>
                  <button className={s.item1__when__time}>14:00-18:00</button>
                  <button className={s.item1__when__time} disabled>
                    18:00-20:00
                  </button>
                  <button className={s.item1__when__time} disabled>
                    20:00-22:00
                  </button>
                </div>
                <div className={s.time_min}>
                  <button className={s.item1_time}>8-10</button>
                  <button className={s.item1_time}>10-12</button>
                  <button className={s.item1_time}>12-14</button>
                  <button className={s.item1_time}>14-16</button>
                  <button className={s.item1_time}>16-18</button>
                  <button className={s.item1_time}>18-20</button>
                </div>
              </label>
            </div>
          </div>
          <div className={s.item__enter}>
            <h4 className={s.item1__subtitle}>Вход</h4>
            <div className={s.wherewraper}>
              <input type="tel" className={s.enter__tel} placeholder="+79128886677" />
              <button className={s.enter_btn}>Получить код</button>
              <button className={s.email_btn}>Войти по почте</button>
            </div>
          </div>
        </div>
        <div className={s.calculator}>
          <Calculator btn="Оплатить на сайте" display="none" />
          <button className={s.calc__btn}>Оплатить при получении</button>
        </div>
      </div>
    </div>
  );
};
