import useSWR from "swr";
import { fetcher } from "../fetcher";

export const useProduct = (slug) => {
  const { data, error, isLoading } = useSWR(
    { url: `${process.env.REACT_APP_PRODUCTS_ENDPOINT}/${slug}` },
    fetcher,
  );

  return {
    product: data,
    errorProduct: error,
    isLoadingProducts: isLoading,
  };
};
