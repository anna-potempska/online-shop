import { IProduct } from "../types";

export const getProducts = (): Promise<IProduct[]> => {
  return fetch("http://localhost:8000/products").then((res) => {
    return res.json();
  });
};
