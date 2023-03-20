import React from "react";

import { BannerPromo } from "../../components/BannerPromo/BannerPromo";
import { MainWrapperCard } from "../../components/MainWrapperCard/MainWrapperCard";
import { Section } from "../../layout/Section/Section";
import { SectionLink } from "../../layout/SectionLink/SectionLink";
import { SectionTitle } from "../../layout/SectionTitle/SectionTitle";
import { SectionTitleWrapper } from "../../layout/SectionTitleWrapper/SectionTitleWrapper";
import { Banners } from "../Banners/Banners";

export const Main = () => {
  return (
    <>

      <BannerPromo />
      <Section>
        <SectionTitleWrapper>
          <SectionTitle>Акции</SectionTitle>
          <SectionLink to="/stocks">Все акции</SectionLink>
        </SectionTitleWrapper>
        <MainWrapperCard title="Акции" />
      </Section>
      <Section>
        <SectionTitleWrapper>
          <SectionTitle>Новинки</SectionTitle>
          <SectionLink to="/new_products">Все новинки</SectionLink>
        </SectionTitleWrapper>
        <MainWrapperCard title="Новинки" />
      </Section>
      <Section>
        <SectionTitleWrapper>
          <SectionTitle>Покупали раньше</SectionTitle>
          <SectionLink to="/bought_before">Все покупки</SectionLink>
        </SectionTitleWrapper>
        <MainWrapperCard title="Покупали раньше" />
      </Section>
      {/* <Banners /> */}

    </>
  );
};
