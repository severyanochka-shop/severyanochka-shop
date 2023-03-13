import React from "react";
import arrow from "../RegistrationFormSubmit/images/arrow.svg";
import s from "./RegistrationFormSubmit.module.scss";
import { Button } from "../../Button/Button";
import { useForm } from "react-hook-form";
import { ControlledTextfield } from "../ControlledInput/ControlledTextfield";
import { useState, useEffect } from "react";

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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={s.wrapper} onSubmit={handleSubmit(onSubmit)} action="">
      {/* <form className={s.wrapper} action=""> */}
      <h1 className={s.title}>Регистрация</h1>
      {errors?.input && (
        <div className={s.messageError}>
          <p className={s.messageError_text}>Не менее 4 символов</p>
        </div>
      )}
      {/* </div> */}
      <ControlledTextfield
        className={s.inputField}
        register={register}
        name={"input"}
        required={true}
        label={"Введите пароль"}
        type="password"
        sms
      />
      <Button
        background="orange"
        className={s.button}
        disabled={!isValid}
        // onSubmit={handleSubmit(onSubmit)}
      >
        Подтвердить
      </Button>
      {timer > 0 && (
        <p className={s.repeat}>
          Запросить код повторно можно через <b>{timer} секунд</b>
        </p>
      )}
      {timer <= 0 && <p className={s.repeat__again}>Отправить ещё раз</p>}

      <div className={s.backWrapper}>
        <img className={s.backWrapper__arrow} src={arrow} alt="<<" />
        <p className={s.backWrapper__text}>Вернуться</p>
      </div>
    </form>
  );
};
