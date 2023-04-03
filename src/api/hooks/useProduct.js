import useSWR from "swr";
import { fetcher } from "../fetcher";

export const useProduct = (slug) => {
  const { data, error, isLoading } = useSWR(
    { url: `${process.env.REACT_APP_PRODUCTS_BY_SLUG}/${slug}` },
    fetcher,
  );

  return {
    product: data,
    errorProduct: error,
    isLoadingProduct: isLoading,
  };
};
