import React from "react";
import { BannerPromo } from "../../components/BannerPromo/BannerPromo";
import { FlexWrapper } from "../../layout/FlexWrapper/FlexWrapper";
import { Section } from "../../layout/Section/Section";
import { SectionLink } from "../../layout/SectionLink/SectionLink";
import { SectionTitle } from "../../layout/SectionTitle/SectionTitle";
import { SectionTitleWrapper } from "../../layout/SectionTitleWrapper/SectionTitleWrapper";
import { AuthorizationForm } from "../../ui/Form/AuthorizationForm/AuthorizationForm";
import { RegistrationForm } from "../../ui/Form/RegistrationForm/RegistrationForm";
import { RegistrationFormSubmit } from "../../ui/Form/RegistrationFormSubmit/RegistrationFormSubmit";
import { Textfield } from "../../ui/Textfield/Textfield";

export const Main = () => {
  return (
    <>
      <Textfield placeholder={"Найти товар"} header/>
      <RegistrationForm />
      <RegistrationFormSubmit />
      <AuthorizationForm />

      <BannerPromo />
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
      </Section>
    </>
  );
};
