import React from "react";
import { BannerPromo } from "../../components/BannerPromo/BannerPromo";
import { FlexWrapper } from "../../layout/FlexWrapper/FlexWrapper";
import { Section } from "../../layout/Section/Section";
import { SectionLink } from "../../layout/SectionLink/SectionLink";
import { SectionTitle } from "../../layout/SectionTitle/SectionTitle";
import { SectionTitleWrapper } from "../../layout/SectionTitleWrapper/SectionTitleWrapper";
import { BannerSpecialOffer } from "../../components/BannerSpecialOffer/BannerSpecialOffer";
import { ArticleWrapper } from "../../components/ArticleWrapper/ArticleWrapper";
import { OurShops } from "../../components/OurShops/OurShops";
import { useCategories } from "../../api/hooks/useCategories";
import { useCategory } from "../../api/hooks/useCategory";

export const Main = () => {
  const { categories, errorCategories, isLoadingCategories } = useCategories();
  const { category, errorCategory, isLoadingCategory } = useCategory("moloko-syry-yajco");

  return (
    <>
      <BannerPromo />
      {!!category && (
        <Section>
          <SectionTitleWrapper>
            <SectionTitle>Акции</SectionTitle>
            <SectionLink to="/stocks">Все акции</SectionLink>
          </SectionTitleWrapper>
          <FlexWrapper data={category.products.slice(0, 4)} />
        </Section>
      )}
      {!!category && (
        <Section>
          <SectionTitleWrapper>
            <SectionTitle>Новинки</SectionTitle>
            <SectionLink to="/new_products">Все новинки</SectionLink>
          </SectionTitleWrapper>
          <FlexWrapper data={category.products.slice(8, 12)} />
        </Section>
      )}
      {!!category && (
        <Section>
          <SectionTitleWrapper>
            <SectionTitle>Покупали раньше</SectionTitle>
            <SectionLink to="/bought_before">Все покупки</SectionLink>
          </SectionTitleWrapper>
          <FlexWrapper data={category.products.slice(14, 18)} />
        </Section>
      )}
      <Section>
        <SectionTitleWrapper>
          <SectionTitle>Специальные предложения</SectionTitle>
        </SectionTitleWrapper>
        <BannerSpecialOffer />
      </Section>
      <Section>
        <SectionTitleWrapper>
          <SectionTitle>Наши магазины</SectionTitle>
        </SectionTitleWrapper>
        <OurShops />
      </Section>
      <Section>
        <SectionTitleWrapper>
          <SectionTitle>Статьи</SectionTitle>
        </SectionTitleWrapper>
        <ArticleWrapper />
      </Section>
    </>
  );
};
