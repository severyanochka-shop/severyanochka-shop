import axios from "axios";

export const api = axios.create({
  baseURL: "http://codeine.tech:3000/api",
});
