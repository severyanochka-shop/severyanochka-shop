import React from "react";
import { BannerPromo } from "../../components/BannerPromo/BannerPromo";
import { FlexWrapper } from "../../layout/FlexWrapper/FlexWrapper";
import { Section } from "../../layout/Section/Section";
import { SectionLink } from "../../layout/SectionLink/SectionLink";
import { SectionTitle } from "../../layout/SectionTitle/SectionTitle";
import { SectionTitleWrapper } from "../../layout/SectionTitleWrapper/SectionTitleWrapper";
import { BannerSpecialOffer } from "../../components/BannerSpecialOffer/BannerSpecialOffer";
import { YandexMaps } from "../../components/YandexMaps/YandexMaps";
import { ArticleWrapper } from "../../components/ArticleWrapper/ArticleWrapper";
import axios from "axios";
import useSWR from "swr";

export const Main = () => {
  const fetcher = (url) => axios({ url }).then((res) => res.data.data);
  const { data, error, isLoading } = useSWR(
    "http://codeine.tech:3000/api/categories/3ed82cc0-9d71-46ec-97d0-365121844a40",
    fetcher,
  );
  return (
    <>
      <BannerPromo />
      {!!data && (
        <Section>
          <SectionTitleWrapper>
            <SectionTitle>Акции</SectionTitle>
            <SectionLink to="/stocks">Все акции</SectionLink>
          </SectionTitleWrapper>
          <FlexWrapper data={data.products.slice(0, 4)} />
        </Section>
      )}
      {!!data && (
        <Section>
          <SectionTitleWrapper>
            <SectionTitle>Новинки</SectionTitle>
            <SectionLink to="/new_products">Все новинки</SectionLink>
          </SectionTitleWrapper>
          <FlexWrapper data={data.products.slice(50, 54)} />
        </Section>
      )}
      {!!data && (
        <Section>
          <SectionTitleWrapper>
            <SectionTitle>Покупали раньше</SectionTitle>
            <SectionLink to="/bought_before">Все покупки</SectionLink>
          </SectionTitleWrapper>
          <FlexWrapper data={data.products.slice(100, 104)} />
        </Section>
      )}
      <Section>
        <SectionTitle>Специальные предложения</SectionTitle>
        <BannerSpecialOffer />
      </Section>
      <Section>
        <SectionTitle>Наши магазины</SectionTitle>
        <YandexMaps />
      </Section>
      <Section>
        <SectionTitle>Статьи</SectionTitle>
        <ArticleWrapper />
      </Section>
    </>
  );
};
