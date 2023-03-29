import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";
import { CategoryPage } from "../../components/CategoryPage/CategoryPage";
import { Burger } from "../../components/Burger/Burger";
import axios from "axios";
import useSWR from "swr";

export const CategoryCatalog = () => {
  const params = useParams();
  const fetcher = (url) => axios({ url }).then((res) => res.data.data);

  const { data, error, isLoading } = useSWR(
    `http://codeine.tech:3000/api/categories/${params.category}`,
    fetcher,
  );

  return (
    <Section>
      <Burger />
      {!!data && (
        <>
          <Title>{data.name}</Title>
          <CategoryPage data={data} />
        </>
      )}
    </Section>
  );
};

export default CategoryCatalog;
