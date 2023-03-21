import React from "react";
import { BannerPromo } from "../../components/BannerPromo/BannerPromo";
import { CardProductBasket } from "../../components/CardProductBasket/CardProductBasket";
import { CartFlex } from "../../layout/CartFlex/CartFlex";
import { FlexWrapper } from "../../layout/FlexWrapper/FlexWrapper";
import { Section } from "../../layout/Section/Section";
import { SectionLink } from "../../layout/SectionLink/SectionLink";
import { SectionTitle } from "../../layout/SectionTitle/SectionTitle";
import { SectionTitleWrapper } from "../../layout/SectionTitleWrapper/SectionTitleWrapper";
import Cart from "../Cart/Cart";

export const Main = () => {
  return (
    <>
      {/* <BannerPromo />
      <Section>
        <SectionTitleWrapper>
          <SectionTitle>Акции</SectionTitle>
          <SectionLink to="/stocks">Все акции</SectionLink>
        </SectionTitleWrapper>
        <FlexWrapper title="Акции" />
      </Section>
      <Section>
        <SectionTitleWrapper>
          <SectionTitle>Новинки</SectionTitle>
          <SectionLink to="/new_products">Все новинки</SectionLink>
        </SectionTitleWrapper>
        <FlexWrapper title="Новинки" />
      </Section>
      <Section>
        <SectionTitleWrapper>
          <SectionTitle>Покупали раньше</SectionTitle>
          <SectionLink to="/bought_before">Все покупки</SectionLink>
        </SectionTitleWrapper>
        <FlexWrapper title="Покупали раньше" />
      </Section> */}
      
      <Cart/>
    </>
  );
};
