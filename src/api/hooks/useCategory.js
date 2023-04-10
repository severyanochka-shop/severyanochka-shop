import useSWR from "swr";
import { fetcher } from "../fetcher";

export const useCategory = (slug, args) => {
  const { data, error, isLoading, size } = useSWR(
    { url: `${process.env.REACT_APP_CATEGORIES_BY_SLUG}/${slug}`, args },
    fetcher,
  );

  return {
    category: data,
    errorCategory: error,
    isLoadingCategory: isLoading,
    sizeCetegory: size,
  };
};
