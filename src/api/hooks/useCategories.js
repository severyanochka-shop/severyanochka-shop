import useSWR from "swr";
import { fetcher } from "../fetcher";

export const useCategories = () => {
  const { data, error, isLoading } = useSWR(["/categories"], fetcher);

  return {
    categories: data,
    errorCategories: error,
    isLoadingcategories: isLoading,
  };
};
