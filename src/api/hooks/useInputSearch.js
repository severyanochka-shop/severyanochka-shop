import useSWR from "swr";
import { fetcher } from "../fetcher";

export const useInputSearch = (text) => {
  const args = {
    searchText: text,
  };
  const { data, error, isLoading } = useSWR(
    { url: `${process.env.REACT_APP_SEARCH_ENDPOINT}`, args },
    fetcher,
  );

  return {
    data: data,
    errorInputSearch: error,
    isLoadingInputSearch: isLoading,
  };
};
