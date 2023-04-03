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
import { useProducts } from "../../api/hooks/useProducts";
import { Spinners } from "../../ui/Spinners/Spinners";
import { Error } from "../../layout/Error/Error";

export const Main = () => {
  const {
    products: stocks,
    errorProducts: errorStocks,
    isLoadingProducts: isLoadingStocks,
  } = useProducts({
    limit: 4,
    withDiscount: true,
  });

  const {
    products: newProducts,
    errorProducts: errorNewProducts,
    isLoadingProducts: isLoadingNewProducts,
  } = useProducts({
    limit: 4,
    isNew: true,
  });

  return (
    <>
      <BannerPromo />
      <Section>
        <SectionTitleWrapper>
          <SectionTitle>Акции</SectionTitle>
          <SectionLink to="/stocks">Все акции</SectionLink>
        </SectionTitleWrapper>
        {!!isLoadingStocks && <Spinners type="circle" />}
        {!!errorStocks && <Error />}
        {!!stocks && <FlexWrapper data={stocks.products} />}
      </Section>
      <Section>
        <SectionTitleWrapper>
          <SectionTitle>Новинки</SectionTitle>
          <SectionLink to="/new_products">Все новинки</SectionLink>
        </SectionTitleWrapper>
        {!!isLoadingNewProducts && <Spinners type="circle" />}
        {!!errorNewProducts && <Error />}
        {!!newProducts && <FlexWrapper data={newProducts.products} />}
      </Section>
      <Section>
        <SectionTitleWrapper>
          <SectionTitle>Покупали раньше</SectionTitle>
          <SectionLink to="/bought_before">Все покупки</SectionLink>
        </SectionTitleWrapper>
        {!!isLoadingNewProducts && <Spinners type="circle" />}
        {!!errorNewProducts && <Error />}
        {!!newProducts && <FlexWrapper data={newProducts.products} />}
      </Section>
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
