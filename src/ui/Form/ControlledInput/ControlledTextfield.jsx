import React from "react";
import clsx from "clsx";
import s from "./Textfield.module.scss";
import eye from "./eye.svg";

export const ControlledTextfield = ({
  className,
  text,
  type,
  disabled,
  medium,
  large,
  register, // нужно дополнительно прокидывать
  name, // нужно дополнительно прокидывать
  required, // нужно для обязательного поля
  label, //  текст
  sms, // для модификации под смс для авторизации
  pattern, // паттерн для телефона
  placeholder,
}) => {
  console.log(required);
  console.log(type);
  console.log(name);
  console.log(pattern);

  return (
    <div className="textfield">
      {/* <label className={s.textfield__label} htmlFor="input"> */}
      <label className={sms ? s.textfield__label_submit : s.textfield__label} htmlFor="input">
        {label}

        {sms === true && (
          <input
            // {...register(name, { required: required, minLength: 4, validate: (value) => value === '1234' })} // нужно дополнительно прокидывать как сделать две поочередные вилдации
            {...register(name, { required: required, minLength: 4 })} // нужно дополнительно прокидывать как сделать две поочередные вилдации
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
            {...register(name, {
              required: required,
              maxLength: 12,
              minLength: 12,
              pattern: {
                value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
              },
            })} // нужно дополнительно прокидывать
            // pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
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
              required: required,
              // maxLength: 12,
              // minLength: 12,
              // pattern: {
              //   value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
              // },
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
        {type === "text" && (
          <input
            {...register(name, {
              // required: required,
              // maxLength: 12,
              // minLength: 12,
              pattern: /[A-Za-zА-Яа-яЁё]/,
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
        {type === "email" && (
          <input
            {...register(name, {
              // required: required,
              // maxLength: 12,
              // minLength: 12,
              pattern: /[A-Za-zА-Яа-яЁё]/,
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
          <input
            {...register(name, {
              // required: required,
              // maxLength: 12,
              // minLength: 12,
              pattern: /[A-Za-zА-Яа-яЁё]/,
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
      </label>
    </div>
  );
};
