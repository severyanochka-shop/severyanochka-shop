import React from "react";
import { Select } from "../../ui/Select/Select";
import s from "./Delivery.module.scss";
import { Calculator } from "../Basket/Calculator/Calculator";
// import { Button } from "../../ui/Button/Button";
// import { ControlledTextfield } from "../../ui/Form/ControlledInput/ControlledTextfield";

export const Delivery = (props) => {
  // const { } = props;
  return (
    <div className={s.delivery}>
      <div className={s.delivery__flex}>
        <div className={s.item1}>
          <div className={s.item1__where}>
            <h4 className={s.item1__subtitle}>Куда</h4>
            <div className={s.wherewraper}>
              <label htmlFor="">
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
          </div>
          <div className={s.item1__when}>
            <h4 className={s.item1__subtitle}>Когда</h4>
            <div className={s.wherewraper}>
              <label htmlFor="" className={s.datewraper}>
                Дата
                <Select className={s.date__select} />
              </label>
              <label htmlFor="">
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
                  <button style={{ width: "61px" }} className={s.item1__when__time}>
                    8-10
                  </button>
                  <button style={{ width: "61px" }} className={s.item1__when__time}>
                    10-12
                  </button>
                  <button style={{ width: "61px" }} className={s.item1__when__time}>
                    12-14
                  </button>
                  <button style={{ width: "61px" }} className={s.item1__when__time}>
                    14-16
                  </button>
                  <button style={{ width: "61px" }} className={s.item1__when__time}>
                    16-18
                  </button>
                  <button style={{ width: "61px" }} className={s.item1__when__time}>
                    18-20
                  </button>
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
        <Calculator />
      </div>
    </div>
  );
};
