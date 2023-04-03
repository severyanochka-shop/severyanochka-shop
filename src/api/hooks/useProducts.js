import useSWR from "swr";
import { fetcher } from "../fetcher";

export const useProducts = (args) => {
  const { data, error, isLoading } = useSWR(
    { url: `${process.env.REACT_APP_PRODUCTS_ENDPOINT}`, args },
    fetcher,
  );

  return {
    products: data,
    errorProducts: error,
    isLoadingProducts: isLoading,
  };
};
