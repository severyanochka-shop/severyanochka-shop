import React from "react";
import { Container } from "../../layout/Container/Container";
import { FlexWrapper } from "../../layout/FlexWrapper/FlexWrapper";
import { Button } from "../../ui/Button/Button";
import { OrdersDates } from "../OrdersDates/OrdersDates";
import s from "./OrdersComponents.module.scss";
import eye from "./eye.svg";

export const OrdersComponents = () => {
  return (
    <>
      <Container>
        <div className={s.orders}>
          <OrdersDates text="В процессе" price="3 006,83" time="11:00-14:00" />
        </div>
        <div className={s.orders__flexWrapper}> FlexWrapper {/* <FlexWrapper /> */}</div>
        <div className={s.orders__btn}>
          <Button background="gray" className={s.orders__btn_gray}>
            <img src={eye} alt="eye" className={s.orders__eye} />
            <p className={s.orders__text}>Просмотреть заказ</p>
          </Button>
        </div>
      </Container>
    </>
  );
};
