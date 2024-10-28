import { IProduct } from "../types";

export const editProduct = (product: IProduct) => {
  return fetch(`http://localhost:8000/products/${product.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
};
