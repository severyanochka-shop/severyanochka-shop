import useSWR from "swr";
import { fetcher } from "../fetcher";

export const useProduct = (slug) => {
  const { data, error, isLoading } = useSWR(["/products", slug], fetcher);

  return {
    product: data,
    errorProduct: error,
    isLoadingProducts: isLoading,
  };
};
