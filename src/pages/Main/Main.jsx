import React from "react";
import { BannerPromo } from "../../components/BannerPromo/BannerPromo";
import { FlexWrapper } from "../../layout/FlexWrapper/FlexWrapper";
import { Section } from "../../layout/Section/Section";
import { SectionLink } from "../../layout/SectionLink/SectionLink";
import { SectionTitle } from "../../layout/SectionTitle/SectionTitle";
import { SectionTitleWrapper } from "../../layout/SectionTitleWrapper/SectionTitleWrapper";
import { BannerSpecialOffer } from "../../components/BannerSpecialOffer/BannerSpecialOffer";
import { YandexMaps } from "../../components/YandexMaps/YandexMaps";
import { ModalVacancy } from "../../layout/Modal/ModalVacancy/ModalVacancy";
import { Modal } from "../../layout/Modal/Modal";

export const Main = () => {
  return (
    <>
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
      <Section>
        <SectionTitle>Специальные предложения</SectionTitle>
        <BannerSpecialOffer />
      </Section>
      <Section>
        <SectionTitle>Наши магазины</SectionTitle>
        <YandexMaps />
      </Section>

      <Modal>
        <ModalVacancy />
      </Modal>
    </>
  );
};
