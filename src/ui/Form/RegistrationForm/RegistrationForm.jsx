import React, { useEffect } from "react";
import s from "./RigistrationForm.module.scss";
import { Checkbox } from "../../Checkbox/Checkbox";
import { Button } from "../../Button/Button";
import x from "../RegistrationForm/images/x.svg";
import { Select } from "../../Select/Select";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Textfield } from "../exapmleInput/Textfield";
import { rules } from "./rules.js";

export const RegistrationForm = () => {
  // дизейбл инпута по чекбокусу
  const [check, setCheck] = useState(false);

  // тогл кнопки пола
  const [genderButton, setGenderButton] = useState(false);
  const changeGender = () => setGenderButton(!genderButton);

  // видимый пароль
  const [visible, setVisible] = useState(false);
  const [visibleSecond, setvisibleSecond] = useState(false);
  const makeVisible = () => setVisible(!visible);
  console.log(visible);

  const {
    register,
    formState: { errors, isValid },
    reset,
    getFieldState,
    getValues,
    handleSubmit,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  //валидация пароля
  const watchFirstPassword = watch("password");
  const watchSecondPassword = watch("secondPassword");
  const [equalPassword, setequalPassword] = useState(false);

  useEffect(() => {
    if (watchSecondPassword === watchFirstPassword && watchSecondPassword != undefined) {
      setequalPassword(!equalPassword);
    } else {
      setequalPassword(false);
    }
  }, [watchSecondPassword, watchFirstPassword]);

  const onSubmit = async (data) => {
    console.log(data);
    const user = { ...data };
    user.dateOfBirth = new Date(user.dateOfBirth);
    user.gender = genderButton ? "female" : "male";
    console.log(user);
    delete user.secondPassword;
    console.log(user);
    const body = JSON.stringify(user);
    console.log(body);

    const response = await fetch("http://google.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  // const rulePhone = {
  //   required: "обязательное поле",
  //   minLength: {
  //     value: 11,
  //     message: "формат 89999999999",
  //   },
  //   pattern: {
  //     value: /[\d]/,
  //     message: "формат 89999999999",
  //   },
  // };

  // const ruleDate = {
  //   required: "обязательное поле",
  // };

  // const ruleLastName = {
  //   required: "обязательное поле",
  //   pattern: {
  //     value: /^[а-яА-Яa-zA-Z]+$/,
  //     message: "только буквы",
  //   },
  // };

  // const rulePassword = {
  //   required: "обязательное поле",
  //   pattern: {
  //     value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
  //     message: "Не менее 8 букв лат. алфавита, прописные и заглавные, цифры",
  //   },
  // };
  // const ruleCardNumber = {
  //   required: false,
  //   maxLength: 6,
  //   minLength: 6,
  //   pattern: {
  //     value: /[\d]/,
  //     message: "пример: 123456",
  //   },
  // };

  // const ruleEmail = {
  //   required: false,
  //   pattern: {
  //     value:
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  //     message: "expample@gmail.com",
  //   },
  // };

  console.log(errors.example);
  console.log(rules);

  return (
    <form className={s.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <img className={s.closeForm} src={x} alt="x" onClick={() => {}} />
      <h1 className={s.title}>Регистрация</h1>
      <h2 className={s.subtitle}>Обязательные поля</h2>
      <div className={s.obligatoryFieldsWrapper}>
        <div className={s.wrapper__input}>
          {errors?.phoneNumber && (
            <div className={s.messageError}>
              <p className={s.messageError_text}>{errors?.phoneNumber.message}</p>
            </div>
          )}

          <Textfield
            className={s.Textfield}
            register={register}
            name={"phoneNumber"}
            label={"Телефон"}
            type="tel"
            placeholder="89999999999"
            rule={rules.rulePhone}
            // labelClass={"labelClass"}
            // labelClass={true}
            // classNameLabel = {s.textfield__labelsms}
          />
        </div>
        <div className={s.wrapper__input}>
          {errors?.phoneNumber && (
            <div className={s.messageError}>
              <p className={s.messageError_text}>{errors?.phoneNumber.message}</p>
            </div>
          )}

          <Textfield
            className={s.Textfield}
            register={register}
            name={"dateOfBirth"}
            label={"Дата рождения"}
            type="date"
            rule={rules.ruleDate}
          />
        </div>
        <div className={s.wrapper__input}>
          {errors?.lastName && (
            <div className={s.messageError}>
              <p className={s.messageError_text}>{errors?.lastName.message}</p>
            </div>
          )}

          <Textfield
            className={s.Textfield}
            register={register}
            name={"lastName"}
            label={"Фамилия"}
            type="text"
            rule={rules.ruleLastName}
          />
        </div>
        <Select
          className={s.select}
          label={"Регион"}
          options={[
            {
              value: "Коми",
              label: "Коми",
            },
            {
              value: "Коми",
              label: "Коми",
            },
            {
              value: "Коми",
              label: "Коми",
            },
          ]}
        ></Select>
        <div className={s.wrapper__input}>
          {errors?.firstName && (
            <div className={s.messageError}>
              <p className={s.messageError_text}>{errors?.firstName.message}</p>
            </div>
          )}
          <Textfield
            className={s.Textfield}
            register={register}
            name={"firstName"}
            label={"Имя"}
            type="text"
            rule={rules.ruleLastName}
          />
        </div>
        <Select
          className={s.select}
          label={"Населенный пункт"}
          options={[
            {
              value: "Усть-Ижма",
              label: "Усть-Ижма",
            },
            {
              value: "Усть-Ижма",
              label: "Усть-Ижма",
            },
            {
              value: "Усть-Ижма",
              label: "Усть-Ижма",
            },
          ]}
        ></Select>

        <div className={s.wrapper__input}>
          {errors?.password && (
            <p className={clsx(s.messageError, s.messageError_password)}>
              Не менее 8 букв лат. алфавита, прописные и заглавные, цифры
            </p>
          )}
          <Textfield
            className={s.Textfield}
            register={register}
            name={"password"}
            label={"Пароль"}
            type={visible ? "text" : "password"}
            placeholder={"Введите пароль"}
            visible={visible ? 1 : 0}
            rule={rules.rulePassword}
          />
          <div className={s.visibleChanger} onClick={() => setVisible(!visible)}></div>
        </div>

        <label className={s.toggleWrapper__label}>
          Пол
          <div className={s.toggleWrapper}>
            <Button
              className={s.toggleWrapper__button__active}
              background={!genderButton ? "green" : ""}
              handler={() => changeGender()}
              disabled={genderButton}
              type={"button"}
            >
              Мужской
            </Button>
            <Button
              className={s.toggleWrapper__button__active}
              background={genderButton ? "green" : ""}
              handler={() => changeGender()}
              disabled={!genderButton}
              type={"button"}
            >
              Женский
            </Button>
          </div>
        </label>

        (
          <div className={s.wrapper__input}>
            {errors?.secondPassword && (
              <p className={clsx(s.messageError, s.messageError_password)}>
                Не менее 8 букв лат. алфавита, прописные и заглавные, цифры
              </p>
            )}
            {!equalPassword && watchSecondPassword != undefined && watchSecondPassword != "" && (
              <p className={clsx(s.messageError, s.messageError_equal)}>Пароли не совпадают</p>
            )}
            <Textfield
              className={s.Textfield}
              register={register}
              name={"secondPassword"}
              label={"Пароль"}
              type={visibleSecond ? "text" : "password"}
              placeholder={"Повторите пароль"}
              visible={visibleSecond ? 1 : 0}
              rule={rules.rulePassword}
            />
            <div
              className={s.visibleChanger}
              onClick={() => setvisibleSecond(!visibleSecond)}
            ></div>
          </div>
        )
      </div>

      <h2 className={s.subtitle}>Необязательные поля</h2>
      <div className={s.freeFieldsWrapper}>
        <div className={s.wrapper__input}>
          {errors?.cardNumber && (
            <p className={clsx(s.messageError, s.messageError_text)}>Пример: 123456</p>
          )}
          <Textfield
            className={s.Textfield}
            register={register}
            name={"cardNumber"}
            type={"text"}
            label={"Номер карты"}
            placeholder={"введите номер карты"}
            rule={rules.ruleCardNumber}
            disabled={check}
          />
        </div>

        <div className={s.wrapper__input}>
          {errors?.email && (
            <div className={s.messageError}>
              <p className={s.messageError_text}>{errors?.email.message}</p>
            </div>
          )}
          <Textfield
            className={s.Textfield}
            register={register}
            name={"email"}
            label={"E-mail"}
            type="email"
            placeholder="expample@gmail.com"
            disabled={check}
            rule={rules.ruleEmail}
          />
        </div>
      </div>

      <div className={s.checkBoxWrapper}>
        <div>
          <Checkbox extrasmall className={s.checkBox} setCheck={setCheck} check={check} />
        </div>
        <p className={s.checkbox__text}>У меня нет карты лояльности</p>
      </div>

      <Button large background="orange" disabled={!isValid} className={s.btnCenter}>
        Продолжить
      </Button>

      <Button small background="orange" border="green" className={s.btnCenter}>
        Вход
      </Button>
    </form>
  );
};
