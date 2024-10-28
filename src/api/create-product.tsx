import { INewProduct } from "../types";

export const createProduct = (newProduct: INewProduct) => {
  return fetch("http://localhost:8000/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  });
};
