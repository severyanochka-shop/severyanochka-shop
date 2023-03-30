import useSWR from "swr";
import { fetcher } from "../fetcher";

export const useCategory = (slug) => {
  const { data, error, isLoading } = useSWR(["/categories", slug], fetcher);

  return {
    category: data,
    errorCategory: error,
    isLoadingCategory: isLoading,
  };
};
