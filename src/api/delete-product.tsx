import { IProduct } from "../types";

export const deletePassword = (product: IProduct) => {
  return fetch(`http://localhost:8000/products/${product.id}`, {
    method: "DELETE",
  });
};
