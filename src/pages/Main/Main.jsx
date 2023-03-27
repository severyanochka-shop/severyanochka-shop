import React from "react";
import { BannerPromo } from "../../components/BannerPromo/BannerPromo";
import { FlexWrapper } from "../../layout/FlexWrapper/FlexWrapper";
import { Section } from "../../layout/Section/Section";
import { SectionLink } from "../../layout/SectionLink/SectionLink";
import { SectionTitle } from "../../layout/SectionTitle/SectionTitle";
import { SectionTitleWrapper } from "../../layout/SectionTitleWrapper/SectionTitleWrapper";
import { BannerSpecialOffer } from "../../components/BannerSpecialOffer/BannerSpecialOffer";
import { YandexMaps } from "../../components/YandexMaps/YandexMaps";
import { useSelector } from "react-redux";

export const Main = () => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <>
      <BannerPromo />
      <Section>
        <SectionTitleWrapper>
          <SectionTitle>Акции</SectionTitle>
          <SectionLink to="/stocks">Все акции</SectionLink>
        </SectionTitleWrapper>
        <FlexWrapper data={data} />
      </Section>
      <Section>
        <SectionTitleWrapper>
          <SectionTitle>Новинки</SectionTitle>
          <SectionLink to="/new_products">Все новинки</SectionLink>
        </SectionTitleWrapper>
        <FlexWrapper data={data} />
      </Section>
      <Section>
        <SectionTitleWrapper>
          <SectionTitle>Покупали раньше</SectionTitle>
          <SectionLink to="/bought_before">Все покупки</SectionLink>
        </SectionTitleWrapper>
        <FlexWrapper data={data} />
      </Section>
      <Section>
        <SectionTitle>Специальные предложения</SectionTitle>
        <BannerSpecialOffer />
      </Section>
      <Section>
        <SectionTitle>Наши магазины</SectionTitle>
        <YandexMaps />
      </Section>
    </>
  );
};
