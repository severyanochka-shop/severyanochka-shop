import React from "react";
import s from "./RigistrationForm.module.scss";
import { Checkbox } from "../../Checkbox/Checkbox";
import { Button } from "../../Button/Button";
import x from "../RegistrationForm/images/x.svg";
import { Select } from "../../Select/Select";
import { Textfield } from "../../Textfield/Textfield";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ControlledTextfield } from "../ControlledInput/ControlledTextfield";
import { Input } from "./Input"


export const RegistrationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });


  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);
  console.log(errors.tel);

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
          pattern="2[0-9]{3}-[0-9]{3}"
        />
        </div>

        <Input/>

        <Textfield
          className={s.Textfield}
          type={"tel"}
          text={"Телефон"}
          medium

          // {...register()}
        />
        {/* <Textfield
          className={s.Textfield}
          type={"text"}
          text={"календарь"}
          medium
        /> */}
        {/* <ControlledTextfield
          className={s.Textfield}
          type={"text"}
          text={"фамилия"}
          medium
          register={register}
        /> */}
        <Textfield
          className={s.Textfield}
          type={"text"}
          text={"фамилия"}
          medium
        />
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

        <label>
          {" "}
          Имя
          <Textfield
            label={"Имя"}
            className={s.Textfield}
            type={"text"}
            text={"Имя"}
            medium
          />
        </label>

        <input type="submit" />
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

        <Textfield
          className={s.Textfield}
          type={"password"}
          text={"пароль"}
          medium
        />

        <label className={s.toggleWrapper__label}>
          Пол
          <div className={s.toggleWrapper}>
            <Button
              className={s.toggleWrapper__button__active}
              // small
              background="green"
              // className={s.toggleWrapper__button__active}
            >
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

        <Textfield
          className={s.Textfield}
          type={"password"}
          text={"повторите пароль"}
          medium
          // disabled
        />
      </div>

      <h2 className={s.subtitle}>Необязательные поля</h2>
      <div className={s.freeFieldsWrapper}>
        <Textfield
          className={s.Textfield}
          type={"text"}
          text={"Номер карты"}
          medium
        />
        <Textfield
          className={s.Textfield}
          type={"text"}
          text={"E-mail"}
          medium
        />

        <label>
          email
          <input type="email" style={{ backgroundColor: "lightblue" }} />
        </label>
      </div>
      <div className={s.checkBoxWrapper}>
        <div>
          <Checkbox extrasmall className={s.checkBox} />
        </div>
        <p className={s.checkbox__text}>У меня нет карты лояльности</p>
      </div>
      <Button large background="orange" disabled className={s.btnContinue}>
        Продолжить
      </Button>
      <Button small background="orange" border="green" className={""}>
        Вход
      </Button>
    </form>
  );
};
