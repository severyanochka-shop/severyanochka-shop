import React from "react";
import { Select } from "../../ui/Select/Select";
import s from "./Delivery.module.scss";
import { Calculator } from "../Basket/Calculator/Calculator";
import { Button } from "../../ui/Button/Button";

export const Delivery = () => {
  const timeFrame = [
    ["8:00-14:00", "14:00-18:00", "18:00-20:00", "20:00-22:00"],
    ["8-10", "10 - 12", "12-14", "14-16", "16-18", "18-20"],
  ];
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
                  {timeFrame[0].map((el) => (
                    <>
                      <Button background="gray" className={s.item1__when__time}>
                        {el}
                      </Button>
                    </>
                  ))}
                </div>
                <div className={s.time_min}>
                  {timeFrame[1].map((el) => (
                    <>
                      <Button background="gray" className={s.item1_time}>
                        {el}
                      </Button>
                    </>
                  ))}
                </div>
              </label>
            </div>
          </div>
          <div className={s.item__enter}>
            <h4 className={s.item1__subtitle}>Вход</h4>
            <div className={s.wherewraper}>
              <input type="tel" className={s.enter__tel} placeholder="+79128886677" />
              <Button background="orange" className={s.enter_btn}>
                Получить код
              </Button>
              <Button background="green" className={s.email_btn}>
                Войти по почте
              </Button>
            </div>
          </div>
        </div>
        <div className={s.calculator}>
          <Calculator btn="Оплатить на сайте" display="none" />
          <Button background="green" className={s.calc__btn}>
            Оплатить при получении
          </Button>
        </div>
      </div>
    </div>
  );
};
