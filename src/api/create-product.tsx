export interface IProduct {
  title: string;
  price: number;
  currency?: string;
  image: string;
  description: string;
}

export const createProduct = (newProduct: IProduct) => {
  return fetch("http://localhost:8000/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  });
};
