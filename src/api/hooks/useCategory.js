import useSWR from "swr";
import { fetcher } from "../fetcher";

export const useCategory = (slug) => {
  const args = {
    productLimit: 21,
    minPrice: 100,
    maxPrice: 250,
    productOffset: 6,
    sortPrice: "desc",
  };
  const { data, error, isLoading } = useSWR(
    { url: `${process.env.REACT_APP_CATEGORIES_BY_SLUG}/${slug}`, args },
    fetcher,
  );

  return {
    category: data,
    errorCategory: error,
    isLoadingCategory: isLoading,
  };
};
