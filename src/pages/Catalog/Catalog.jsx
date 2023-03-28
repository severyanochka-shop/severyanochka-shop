import axios from "axios";
import React from "react";
import useSWR from "swr";
import { Category } from "../../components/Category/Category";
import { Error } from "../../layout/Error/Error";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";
import { Spinners } from "../../ui/Spinners/Spinners";

const Catalog = () => {
  const fetcher = (url) => axios({ url }).then((res) => res.data.data);
  const { data, error, isLoading } = useSWR("http://codeine.tech:3000/api/categories/", fetcher);
  return (
    <Section>
      <Title>Каталог</Title>
      {!!isLoading && <Spinners type="circle" />}
      {!!error && <Error />}
      {!!data && <Category categories={data} />}
    </Section>
  );
};

export default Catalog;
