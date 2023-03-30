import { api } from "./api";

export const fetcher = async (route, slug = "") =>
  await api.get(`${route}${slug}`.split(",").join("/")).then((res) => res.data.data);
