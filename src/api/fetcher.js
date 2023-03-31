import { api } from "./api";

export const fetcher = async ({ url, args }) =>
  await api.get(`${url}`, { params: args }).then((res) => res.data.data);
