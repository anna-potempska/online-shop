import { useEffect, useState } from "react";
import { createProduct } from "../api/create-product";
import { getProducts } from "../api/get-products";
import { editProduct } from "../api/edit-products";
import { deletePassword } from "../api/delete-product";
import { INewProduct, IProduct } from "../types";

export const useProduct = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    getProducts().then((data) => {
      setProducts(data);
    });
  };

  const onCreateProduct = async (newProduct: INewProduct) => {
    await createProduct(newProduct);
    await fetchProducts();
  };

  const onEditProduct = async (product: IProduct) => {
    await editProduct(product);
    await fetchProducts();
  };

  const onDeleteProduct = async (product: IProduct) => {
    await deletePassword(product);
    await fetchProducts();
  };

  return {
    products,
    fetchProducts,
    onCreateProduct,
    onEditProduct,
    onDeleteProduct,
  };
};

export default useProduct;
