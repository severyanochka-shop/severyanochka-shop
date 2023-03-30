import React from "react";
import arrow from "../RegistrationFormSubmit/images/arrow.svg";
import s from "./RegistrationFormSubmit.module.scss";
import { Button } from "../../../ui/Button/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Textfield } from "../../../ui/Textfield/Textfield";
import { rules } from "../RegistrationForm/rules";
import clsx from "clsx";

export const RegistrationFormSubmit = () => {
  const [timer, setTimer] = useState(3);
  let tempTimer = timer;

  const timerId = setInterval(function () {
    if (tempTimer === 0) {
      clearInterval(timerId);
    } else {
      tempTimer = tempTimer - 1;
      setTimer(tempTimer);
    }
  }, 1000);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    await fetch("http://google.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <form className={clsx(s.wrapper, s.wrapper__SMS)} onSubmit={handleSubmit(onSubmit)} action="">
      <h1 className={s.title}>Регистрация</h1>
      <div className={s.wrapper__input}>
        <div className={s.wrapperSMS}>
          <Textfield
            className={s.sms}
            register={register}
            name={"sms"}
            type={"password"}
            maxLength="4"
            label={"Код из СМС"}
            rule={rules.ruleSMS}
            labelClass={s.labelClass}
          />
        </div>
      </div>
      <Button background="orange" className={s.button} disabled={!isValid}>
        Подтвердить
      </Button>
      {timer > 0 && (
        <p className={s.repeat}>
          Запросить код повторно можно через <b>{timer} секунд</b>
        </p>
      )}
      {timer <= 0 && <p className={clsx(s.repeat, s.repeat__again)}>Отправить ещё раз</p>}

      <div className={s.backWrapper}>
        <img className={s.backWrapper__arrow} src={arrow} alt="<<" />
        <p className={s.backWrapper__text}>Вернуться</p>
      </div>
    </form>
  );
};
