import React from "react";
import clsx from "clsx";
import s from "./Textfield.module.scss";
import eye from "./eye.svg";
import eyeOff from "./eyeOff.svg";

export const ControlledTextfield = ({
  className,
  text, // placeholder,
  type,
  disabled,
  medium,
  large,
  register, // нужно дополнительно прокидывать
  name, // нужно дополнительно прокидывать
  required, // нужно для обязательного поля
  label, //  текст
  sms, // для модификации под смс для авторизации
  message,
  cardNumber,
  passwordVisible,
}) => {
  return (
    <div className="textfield">
      <label className={sms ? s.textfield__label_submit : s.textfield__label} htmlFor="input">
        {label}

        {sms === true && (
          <input
            {...register(name, { required: true, minLength: 4 })} 
            
            type={"password"}
            maxLength="4"
            name={name}
            id="input"
            placeholder={text}
            disabled={disabled}
            className={clsx(s.textfield__input, className, {
              [s.textfield__input_large]: large,
              [s.textfield__input_medium]: medium,
              [s.textfield__input_sms]: sms,
            })}
          ></input>
        )}
        {type === "tel" && (
          <input
            maxLength="11"
            {...register(name, {
              required: "обязательное поле",
              minLength: {
                value: 11,
                message: "формат 89999999999",
              },
              pattern: {
                value: /[\d]/,
                message: "формат 89999999999",
              },
            })}
            type={type}
            name={name}
            id="input"
            placeholder={text}
            disabled={disabled}
            className={clsx(s.textfield__input, className, {
              [s.textfield__input_large]: large,
              [s.textfield__input_medium]: medium,
              [s.textfield__input_sms]: sms,
            })}
          ></input>
        )}
        {type === "date" && (
          <input
            {...register(name, {
              required: "обязательное поле",
              validate: {
                postitve: (value) => new Date(value) < new Date("2005-03-14"),
              },
            })}
            type={type}
            name={name}
            id="input"
            placeholder={text}
            disabled={disabled}
            className={clsx(s.textfield__input, className, {
              [s.textfield__input_large]: large,
              [s.textfield__input_medium]: medium,
              [s.textfield__input_sms]: sms,
            })}
          ></input>
        )}
        {type === "text" && (
          <input
            {...register(name, {
              required: "обязательное поле",
              pattern: {
                value: /^[а-яА-Яa-zA-Z]+$/,
                message: "только буквы",
              },
            })}
            type={type}
            name={name}
            id="text"
            placeholder={text}
            disabled={disabled}
            className={clsx(s.textfield__input, className, {
              [s.textfield__input_large]: large,
              [s.textfield__input_medium]: medium,
              [s.textfield__input_sms]: sms,
            })}
          ></input>
        )}
        {type === "email" && (
          <input
            {...register(name, {
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: message,
              },
            })}
            type={type}
            name={name}
            id="input"
            placeholder={text}
            disabled={disabled}
            className={clsx(s.textfield__input, className, {})}
          ></input>
        )}
        {cardNumber && (
          <input
            maxLength="6"
            {...register(name, {
              maxLength: 6,
              minLength: 6,
              pattern: {
                value: /[\d]/,
              },
            })} // нужно дополнительно прокидывать
            type={text}
            name={name}
            id="cardNumber"
            placeholder={text}
            disabled={disabled}
            className={clsx(s.textfield__input, className, {})}
          ></input>
        )}
        {type === "password" && (
          <input
            {...register(name, {
              required: "обязательное поле",
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                message: "Не менее 8 букв лат. алфавита, прописные и заглавные, цифры",
              },
            })}
            type={type}
            name={name}
            id="input"
            placeholder={text}
            disabled={disabled}
            className={clsx(s.textfield__input, className, {})}
          ></input>
        )}
        {type === "password" && (
          <a href="#" className={s.textfield__password}>
            <img src={eye} alt="eye" width="24" height="24" className="password__img" />
          </a>
        )}

        {passwordVisible && (
          <input
            {...register(name, {
              required: required,
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                message: { message },
              },
            })} // нужно дополнительно прокидывать
            type="text"
            name={name}
            id="passwordVisible"
            placeholder={text}
            disabled={disabled}
            className={clsx(s.textfield__input, className, {
              [s.textfield__input_large]: large,
              [s.textfield__input_medium]: medium,
              [s.textfield__input_sms]: sms,
            })}
          ></input>
        )}
        {passwordVisible && (
          <a href="#" className={s.textfield__password}>
            <img src={eyeOff} alt="eyeOff" width="24" height="24" className="password__img" />
          </a>
        )}
      </label>
    </div>
  );
};
