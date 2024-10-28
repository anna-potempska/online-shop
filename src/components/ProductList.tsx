import { IProduct } from "../types";
import ProductCard from "./ProductCard";

interface IProductListProps {
  products: IProduct[];
  onEditProduct: (product: IProduct) => void;
  onDeleteProduct: (product: IProduct) => void;
}

export default function ProductsList({
  products,
  onEditProduct,
  onDeleteProduct,
}: IProductListProps) {
  return (
    <>
      <div className="section-products-list">
        <h2>Our Products</h2>
      </div>
      <div className="products-list">
        {products.map((product, id) => (
          <ProductCard
            product={product}
            onEditProduct={onEditProduct}
            onDeleteProduct={onDeleteProduct}
            key={id}
          />
        ))}
      </div>
    </>
  );
}
