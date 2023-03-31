import useSWR from "swr";
import { fetcher } from "../fetcher";

export const useCategories = () => {
  const { data, error, isLoading } = useSWR(
    { url: process.env.REACT_APP_CATEGORIES_ENDPOINT },
    fetcher,
  );

  return {
    categories: data,
    errorCategories: error,
    isLoadingcategories: isLoading,
  };
};
