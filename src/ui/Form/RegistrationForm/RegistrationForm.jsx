import React, { useEffect } from "react";
import s from "./RigistrationForm.module.scss";
import { Checkbox } from "../../Checkbox/Checkbox";
import { Button } from "../../Button/Button";
import x from "../RegistrationForm/images/x.svg";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Textfield } from "../../../ui/Textfield/Textfield";
import { rules } from "./rules.js";
import * as yup from "yup";
import { Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "../../Select/Select";

export const RegistrationForm = () => {
  const schema = yup.object().shape({
    status: yup
      .object()
      .shape({
        label: yup.string().required("Заполните поле"),
        value: yup.string().required("Заполните поле"),
      })
      .required("Заполните поле"),

    status2: yup
      .object()
      .shape({
        label: yup.string().required("Заполните поле"),
        value: yup.string().required("Заполните поле"),
      })
      .required("Заполните поле"),
  });

  // дизейбл инпута по чекбокусу
  const [check, setCheck] = useState(false);
  const checkHandler = () => {setCheck(!check)}


  // тогл кнопки пола
  const [genderButton, setGenderButton] = useState(false);
  const changeGender = () => setGenderButton(!genderButton);

  // видимый пароль
  const [visible, setVisible] = useState(false);
  const [visibleSecond, setvisibleSecond] = useState(false);

  const {
    register,
    formState: { errors, isValid },
    reset,
    getFieldState,
    getValues,
    handleSubmit,
    watch,
    control,
  } = useForm({
    // resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const options1 = [
    { label: "test1", value: "test1" },
    { label: "test2", value: "test2" },
  ];

  const options2 = [
    { label: "test3", value: "test3" },
    { label: "test4", value: "test4" },
  ];

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
    const user = { ...data };
    user.dateOfBirth = new Date(user.dateOfBirth);
    user.gender = genderButton ? "female" : "male";
    delete user.secondPassword;

    const response = await fetch("http://google.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

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
            className={s.textField}
            register={register}
            maxLength="11"
            name={"phoneNumber"}
            label={"Телефон"}
            type="tel"
            placeholder="89999999999"
            rule={rules.rulePhone}
          />
        </div>

        <div className={s.wrapper__input}>
          {errors?.dateOfBirth && (
            <div className={s.messageError}>
              <p className={s.messageError_text}>{errors?.dateOfBirth.message}</p>
            </div>
          )}
          <Textfield
            className={s.textField}
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
            className={s.textField}
            register={register}
            name={"lastName"}
            label={"Фамилия"}
            type="text"
            rule={rules.ruleLastName}
          />
        </div>

        {/* <label className={s.select_label}>
          <p>Select 1</p>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                isClearable
                isSearchable={false}
                className={s.select}
                classNamePrefix="custom-select"
                options={options1}
              />
            )}
          />
          <p className={s.select_tooltip}>
            {errors.status?.message || errors.status?.label.message}
          </p>
        </label> */}

        <div className={s.select__wrapper}>
          {errors?.region && <p className={s.messageErrorSelect}>{errors.region.message}</p>}
          <label className={s.selectLabel}> Регион </label>

          <select
            name="region"
            className={s.select}
            placeholder="Регион"
            {...register("region", { required: "обязательное поле" })}
          >
            <option value="">Регион</option>
            <option value="test2">test1</option>
            <option value="test1">test2</option>
            <option value="test2">test3</option>
          </select>
        </div>

        <div className={s.wrapper__input}>
          {errors?.firstName && (
            <div className={s.messageError}>
              <p className={s.messageError_text}>{errors?.firstName.message}</p>
            </div>
          )}
          <Textfield
            className={s.textField}
            register={register}
            name={"firstName"}
            label={"Имя"}
            type="text"
            rule={rules.ruleLastName}
          />
        </div>

        {/* <label className={s.select_label}>
          <p>Select 2</p>

          <Controller
            name="status2"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                isClearable
                isSearchable={false}
                className={s.select}
                classNamePrefix="custom-select"
                options={options2}
              />
            )}
          />

          <p className={s.select_tooltip}>
            {errors.status2?.message || errors.status2?.label.message}
          </p>
        </label> */}

        <div className={s.select__wrapper}>
          {errors?.city && <p className={s.messageErrorSelect}>{errors.city.message}</p>}
          <label className={s.selectLabel}> Регион </label>

          <select
            name="city"
            className={s.select}
            placeholder="Город"
            {...register("city", { required: "обязательное поле" })}
          >
            <option value="">Регион</option>
            <option value="test2">test1</option>
            <option value="test1">test2</option>
            <option value="test2">test3</option>
          </select>
        </div>

        <div className={s.wrapper__input}>
          {errors?.password && (
            <p className={clsx(s.messageError, s.messageError_password)}>
              Не менее 8 букв лат. алфавита, прописные и заглавные, цифры
            </p>
          )}
          <Textfield
            className={s.textField}
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
              background={genderButton ? "" : "green"}
              className={s.toggleWrapper__button}
              handler={() => changeGender()}
              disabled={genderButton}
              type={"button"}
            >
              Мужской
            </Button>
            <Button
              className={s.toggleWrapper__button}
              background={!genderButton ? "" : "green"}
              handler={() => changeGender()}
              disabled={!genderButton}
              type={"button"}
            >
              Женский
            </Button>
          </div>
        </label>

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
            className={s.textField}
            register={register}
            name={"secondPassword"}
            label={"Пароль"}
            type={visibleSecond ? "text" : "password"}
            placeholder={"Повторите пароль"}
            visible={visibleSecond ? 1 : 0}
            rule={rules.rulePassword}
          />
          <div className={s.visibleChanger} onClick={() => setvisibleSecond(!visibleSecond)}></div>
        </div>
      </div>

      <h2 className={s.subtitle}>Необязательные поля</h2>
      <div className={s.freeFieldsWrapper}>
        <div className={s.wrapper__input}>
          {errors?.cardNumber && (
            <p className={clsx(s.messageError, s.messageError_text)}>Пример: 123456</p>
          )}
          <Textfield
            className={s.textField}
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
            className={s.textField}
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
        <div onChange={checkHandler}>
          <Checkbox extrasmall className={s.checkBox}  check={check} />
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
