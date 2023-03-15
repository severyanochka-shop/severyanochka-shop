import React from "react";
import s from "./RigistrationForm.module.scss";
import { Checkbox } from "../../Checkbox/Checkbox";
import { Button } from "../../Button/Button";
import x from "../RegistrationForm/images/x.svg";
import { Select } from "../../Select/Select";
import { Textfield } from "../../TextField/Textfield";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ControlledTextfield } from "../ControlledInput/ControlledTextfield";
import { Input } from "./Input";

export const RegistrationForm = () => {
  //пароль
  const [visible, setVisible] = useState(false);
  const [visibleSecond, setvisibleSecond] = useState(false);
  const makeVisible = () => setVisible(!visible);

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

  const onSubmit = (data) => {};

  const watchFirstPassword = watch("firstPassword");
  const watchSecondPassword = watch("secondPassword");

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
