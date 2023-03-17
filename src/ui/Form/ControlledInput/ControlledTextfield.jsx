import React from "react";
import clsx from "clsx";
import s from "./Textfield.module.scss";
import eye from "./eye.svg";

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
  // patternValue, // паттерн
  message,
  cardNumber,
  passwordVisible,
  watchFirstPassword,
  watchSecondPassword,
}) => {

  



  return (
    <div className="textfield">
      <label className={sms ? s.textfield__label_submit : s.textfield__label} htmlFor="input">
        {label}

        {sms === true && (
          <input
            {...register(name, { required: required, minLength: 4 })} //
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
            maxLength="12"
            {...register(name, {
              required: required,
              maxLength: 12,
              minLength: 12,
              pattern: {
                value: /[\d]/,
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
              validate: (value, formValues) => new Date(value) < new Date("2005-03-14"),
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
              required: required,
              pattern: /^[а-яА-Яa-zA-Z]+$/,
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
            className={clsx(s.textfield__input, className, {
              [s.textfield__input_large]: large,
              [s.textfield__input_medium]: medium,
              [s.textfield__input_sms]: sms,
            })}
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
            className={clsx(s.textfield__input, className, {
            })}
          ></input>
        )}
        {type === "password" && (
          <input
            {...register(name, {
              pattern: {
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                message: { message },
              },
            })} // нужно дополнительно прокидывать
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
        {type === "password" && (
          <a href="#" className={s.textfield__password}>
            <img src={eye} alt="eye" width="24" height="24" className="password__img" />
          </a>
        )}

        {passwordVisible && (
          <input
            {...register(name, {
              pattern: {
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
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
        {type === "password" && (
          <a href="#" className={s.textfield__password}>
            <img src={eye} alt="eye" width="24" height="24" className="password__img" />
          </a>
        )}


      </label>
    </div>
  );
};
