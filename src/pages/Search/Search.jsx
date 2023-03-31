import React from "react";
import { Section } from "../../layout/Section/Section";
import { SectionTitle } from "../../layout/SectionTitle/SectionTitle";
import { SectionTitleWrapper } from "../../layout/SectionTitleWrapper/SectionTitleWrapper";
import s from "./Search.module.scss";

export const Search = () => {
  return (
    <Section>
      <SectionTitleWrapper className={s.search_wrapper}>
        <SectionTitle>Результат поиска</SectionTitle>
        <p className={s.text}>по запросу <span className={s.search_result}>еда</span></p>
      </SectionTitleWrapper>
    </Section>
  );
};

export default Search;
