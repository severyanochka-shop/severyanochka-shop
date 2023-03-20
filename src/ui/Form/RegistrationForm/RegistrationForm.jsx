import React from "react";
import s from "./RigistrationForm.module.scss";
import { Checkbox } from "../../Checkbox/Checkbox";
import { Button } from "../../Button/Button";
import x from "../RegistrationForm/images/x.svg";
import { TextField } from "../../Textfield/Textfield";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ControlledTextfield } from "../ControlledInput/ControlledTextfield";
import { Input } from "./Input";
import * as yup from "yup";
import { Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "../../Select/Select";

export const RegistrationForm = () => {
  //временно для селекта
  const options1 = [
    { label: "test1", value: "test1" },
    { label: "test2", value: "test2" },
  ];

  const options2 = [
    { label: "test3", value: "test3" },
    { label: "test4", value: "test4" },
  ];

  //пароль
  const [visible, setVisible] = useState(false);
  const [visibleSecond, setvisibleSecond] = useState(false);
  const makeVisible = () => setVisible(!visible);

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
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const watchFirstPassword = watch("firstPassword");
  const watchSecondPassword = watch("secondPassword");

  console.log(errors);

  return (
    <form className={s.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <img className={s.closeForm} src={x} alt="x" onClick={() => {}} />
      <h1 className={s.title}>Регистрация</h1>
      <h2 className={s.subtitle}>Обязательные поля</h2>
      <div className={s.obligatoryFieldsWrapper}>
        <div className={s.wrapper__input}>
          {errors?.tel && (
            <div className={s.messageError}>
              <p className={s.messageError_text}>Неверный формат</p>
            </div>
          )}
          <ControlledTextfield
            className={s.Textfield}
            register={register}
            name={"tel"}
            required={true}
            label={"Телефон"}
            type="tel"
            text="89999999999"
          />
        </div>

        <div className={s.wrapper__input}>
          {errors?.date && (
            <div className={s.messageError_small}>
              <p className={s.messageError_small}>Меньше 18 лет</p>
            </div>
          )}
          <ControlledTextfield
            className={s.Textfield}
            register={register}
            name={"date"}
            required={true}
            label={"Дата рождения"}
            type="date"
            text="2005-01-01"
          />
        </div>

        <div className={s.wrapper__input}>
          {errors?.lastName && (
            <div className={s.messageError}>
              <p className={s.messageError_text}>Только буквы</p>
            </div>
          )}
          <ControlledTextfield
            className={s.Textfield}
            register={register}
            name={"lastName"}
            required={true}
            label={"Фамилия"}
            type="text"
          />
        </div>

        <label className={s.select_label}>
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
        </label>

        <div className={s.wrapper__input}>
          {errors?.firstName && (
            <div className={s.messageError}>
              <p className={s.messageError_text}>Только буквы</p>
            </div>
          )}
          <ControlledTextfield
            className={s.Textfield}
            register={register}
            name={"firstName"}
            required={true}
            label={"Имя"}
            type="text"
          />
        </div>

        <label className={s.select_label}>
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
        </label>

        {!visible && (
          <div className={s.wrapper__input}>
            {errors?.firstPassword && (
              <div className={s.messageError}>
                <p className={s.messageError_text}>Не менее 6 символов</p>
              </div>
            )}
            <ControlledTextfield
              className={s.Textfield}
              register={register}
              name={"firstPassword"}
              required={true}
              label={"Пароль"}
              type="password"
              text={"невидно"}
              watchFirstPassword={watchFirstPassword}
            />
            <div className={s.button} onClick={() => setVisible(!visible)}></div>
          </div>
        )}

        {visible && (
          <div className={s.wrapper__input}>
            {errors?.firstPassword && (
              <div className={s.messageError}>
                <p className={s.messageError_text}>Не менее 6 символов</p>
              </div>
            )}
            <ControlledTextfield
              className={s.Textfield}
              register={register}
              name={"firstPassword"}
              required={true}
              label={"Пароль"}
              // type="password"
              text={"видно"}
              passwordVisible
              watchFirstPassword={watchFirstPassword}
            />
            <div className={s.button} onClick={() => setVisible(!visible)}></div>
          </div>
        )}

        <label className={s.toggleWrapper__label}>
          Пол
          <div className={s.toggleWrapper}>
            <Button className={s.toggleWrapper__button__active} background="green">
              Мужской
            </Button>
            <Button
              //  className={s.toggleWrapper__button}
              // small
              // background="orange"
              disabled
              // className={s.toggleWrapper__button}
              className={s.toggleWrapper__button__active}
            >
              Женский
            </Button>
          </div>
        </label>

        {!visibleSecond && (
          <div className={s.wrapper__input}>
            {errors?.secondPassword && (
              <div className={s.messageError}>
                <p className={s.messageError_text}>Не менее 6 символов</p>
              </div>
            )}
            <ControlledTextfield
              className={s.Textfield}
              register={register}
              name={"secondPassword"}
              required={true}
              label={"Повторите пароль"}
              type="password"
              text={"невидно"}
              watchSecondPassword={watchSecondPassword}
            />
            <div className={s.button} onClick={() => setvisibleSecond(!visibleSecond)}></div>
          </div>
        )}

        {visibleSecond && (
          <div className={s.wrapper__input}>
            {errors?.secondPassword && (
              <div className={s.messageError}>
                <p className={s.messageError_text}>Не менее 6 символов</p>
              </div>
            )}
            <ControlledTextfield
              className={s.Textfield}
              register={register}
              name={"secondPassword"}
              required={true}
              label={"Повторите пароль"}
              type="text"
              text={"видно"}
              watchSecondPassword={watchSecondPassword}
            />
            <div className={s.button} onClick={() => setvisibleSecond(!visibleSecond)}></div>
          </div>
        )}
      </div>

      <h2 className={s.subtitle}>Необязательные поля</h2>
      <div className={s.freeFieldsWrapper}>
        <div className={s.wrapper__input}>
          {errors?.cardNumber && (
            <div className={s.messageError}>
              <p className={s.messageError_text}>Пример: 123456</p>
            </div>
          )}
          <ControlledTextfield
            className={s.Textfield}
            register={register}
            name={"cardNumber"}
            required={true}
            label={"Номер карты"}
            // type="text"
            text={"введите номер карты"}
            cardNumber
          />
        </div>

        <div className={s.wrapper__input}>
          {errors?.email && (
            <div className={s.messageError}>
              <p className={s.messageError_text}>{getFieldState("email").error?.message}</p>
            </div>
          )}
          <ControlledTextfield
            className={s.Textfield}
            register={register}
            name={"email"}
            required={true}
            label={"E-mail"}
            type="email"
            text="expample@gmail.com"
            message="expample@gmail.com"
          />
        </div>
      </div>

      <div className={s.checkBoxWrapper}>
        <div>
          <Checkbox extrasmall className={s.checkBox} />
        </div>
        <p className={s.checkbox__text}>У меня нет карты лояльности</p>
      </div>
      <Button large background="orange" disabled={!isValid} className={s.btnContinue}>
        Продолжить
      </Button>
      <Button small background="orange" border="green" className={""}>
        Вход
      </Button>
    </form>
  );
};
