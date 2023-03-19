import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Textfield } from "../exapmleInput/Textfield";
import { Button } from "../../Button/Button";
import { rules } from "../RegistrationForm/rules";
import arrow from "../RegistrationFormSubmit/images/arrow.svg";
import s from "./AuthorizationForm.module.scss";
import x from "../RegistrationForm/images/x.svg";
import clsx from "clsx";

export const AuthorizationForm = () => {
  console.log(rules);
  const [timer, setTimer] = useState(3);
  let tempTimer = timer;

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  // переход по формам
  const [step, setStep] = useState(1);
  // step1 вход с инпутом телефоном
  // step2 ввод пароля
  // step3 забыли пароль
  // step4 новый пароль

  const onSubmit = async (data) => {
    console.log(data);
    if (!forgetPassword) {
      setStep(2);
    } else if (step === 1 || step === 2) {
      setStep(3);

      const timerId = setInterval(function () {
        if (tempTimer === 0) {
          clearInterval(timerId);
        } else {
          tempTimer = tempTimer - 1;
          setTimer(tempTimer);
        }
      }, 1000);
    } else if (step === 3) {
      setStep(4);
    }

    const response = await fetch("http://google.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  // видимый пароль
  const [visible, setVisible] = useState(false);
  const [visibleSecond, setvisibleSecond] = useState(false);

  // забыли пароль
  const [forgetPassword, setForgetPassword] = useState(false);

  // выслали смс

  return (
    <form
      className={
        step === 4
          ? clsx(s.wrapper, s.wrapper__Step4)
          : step !== 3
          ? s.wrapper
          : clsx(s.wrapper, s.wrapper__SMS)
      }
      onSubmit={handleSubmit(onSubmit)}
      action=""
    >
      {/* <p>step {step}</p> */}
      <img className={s.closeForm} src={x} alt="x" onClick={() => {}} />
      <h1 className={s.title}>{step !== 4 ? "Вход" : "Новый пароль"}</h1>
      {errors?.phoneNumber && (
        <div className={s.messageError}>
          <p className={s.messageError_text}>{errors?.phoneNumber.message}</p>
        </div>
      )}
      {(step === 1 || forgetPassword) && step !== 3 && step !== 4 && (
        <Textfield
          huge
          // className={s.inputField}
          register={register}
          name={"phoneNumber"}
          required={true}
          label={"Телефон"}
          type="tel"
          rule={rules.rulePhone}
        />
      )}

      {((step === 2 && !forgetPassword) || step === 4) && (
        <div className={s.wrapper__input}>
          {/* {errors?.password && (
                <p className={s.messageError_password}>{errors?.password.message}</p>
            )} */}
          <Textfield
            huge
            className={step === 4 ? s.inputField : ""}
            // register={register}
            name={"password"}
            label={"Пароль"}
            type={visible ? "text" : "password"}
            placeholder={"Введите пароль"}
            visible={visible ? 1 : 0}
            // rule={rules.rulePassword}
          />
          <div
            className={step != 4 ? s.visibleToggler : s.visibleToggler__Step4Password}
            onClick={() => setVisible(!visible)}
          ></div>
        </div>
      )}
      {((step === 2 && !forgetPassword) || step === 4) && visible && (
        <div className={s.wrapper__input}>
          {/* {errors?.password && (
            <div className={s.messageError_password}>
              <p className={s.messageError_password}>{errors?.password.message}</p>
            </div>
          )} */}
          <div
            className={step != 4 ? s.visibleToggler : s.visibleToggler____Step4Password}
            onClick={() => setVisible(!visible)}
          ></div>
        </div>
      )}

      {((step !== 1 && step !== 2 && !forgetPassword) || step === 4) && (
        <div className={s.wrapper__input}>
          {/* {errors?.password && (
            <div className={s.messageError_password}>
              <p className={s.messageError_password}>{errors?.password.message}</p>
            </div>
          )} */}

          <Textfield
            huge
            // className={s.inputField1}
            register={register}
            name={"secondPassword"}
            label={"Повторите пароль"}
            type={visibleSecond ? "text" : "password"}
            placeholder={"Повторите пароль"}
            visible={visibleSecond ? 1 : 0}
            rule={rules.rulePassword}
          />
          <div
            className={step != 4 ? s.visibleToggler : s.visibleToggler__Step4SecondPassword}
            onClick={() => setvisibleSecond(!visibleSecond)}
          ></div>
        </div>
      )}

      {step === 3 && (
        <div className={s.wrapper__input}>
          {/* {errors?.password && (
            <div className={s.messageError_password}>
              <p className={s.messageError_password}>{errors?.password.message}</p>
            </div>
          )} */}
          <div className={s.wrapperSMS}>
            <Textfield
              className={s.sms}
              register={register}
              name={"input"}
              type={"password"}
              maxLength="4"
              label={"Код из СМС"}
              rule={rules.ruleSMS}
            />
          </div>
        </div>
      )}
      {(step === 1 || forgetPassword) && step !== 3 && step != 4 && (
        <Button
          background="orange"
          className={s.button}
          disabled={!isValid}
          // handler={submitEnter}
          onSubmit={handleSubmit(onSubmit)}
        >
          {!forgetPassword ? "ВХОД" : "Отправить СМС"}
        </Button>
      )}
      {step === 2 && !forgetPassword && (
        <Button
          background="orange"
          className={s.button}
          // disabled={!isValid}
          // handler={submitEnter}
          onSubmit={handleSubmit(onSubmit)}
        >
          ПОДТВЕРДИТЬ
        </Button>
      )}

      {(step === 3 || step === 4) && (
        <Button
          background="orange"
          className={s.button}
          disabled={!isValid}
          // handler={submitEnter}
          onSubmit={handleSubmit(onSubmit)}
        >
          ПОДТВЕРДИТЬ
        </Button>
      )}
      {step === 3 && timer > 0 && (
        <p className={s.repeat}>
          Запросить код повторно можно через <b>{timer} секунд</b>
        </p>
      )}
      {timer <= 0 && <p className={clsx(s.repeat, s.repeat__again)}>Отправить ещё раз</p>}
      {step === 1 && !forgetPassword && (
        <div className={s.bottomWrapper}>
          <Button
            background="white"
            // small
            border="green"
            className={s.buttonReg}
            handler={() => console.log("hi")}
          >
            Регистрация{" "}
          </Button>
          <a className={s.bottomWrapper__text} onClick={() => setForgetPassword(true)}>
            Забыли пароль?
          </a>
        </div>
      )}
      {forgetPassword && (
        <div className={s.bottomWrapper}>
          <div className={s.bottomBack__center}>
            <img className={s.backWrapper__arrow} src={arrow} alt="<<" />
            <a className={s.bottomWrapper__text}>Вернуться</a>
          </div>
        </div>
      )}
      {step === 2 && !forgetPassword && (
        <div className={s.bottomWrapper}>
          <div className={s.bottomBack}>
            <img className={s.backWrapper__arrow} src={arrow} alt="<<" />
            <p className={s.backWrapper__text}>Вернуться</p>
          </div>

          <p className={s.bottomWrapper__text} onClick={() => setForgetPassword(true)}>
            Забыли пароль
          </p>
        </div>
      )}
    </form>
  );
};
