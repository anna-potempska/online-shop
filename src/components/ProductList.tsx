import { IProduct } from "../api/create-product";
import ProductCard from "./ProductCard";

interface IProductListProps {
  products: IProduct[];
}
export default function ProductsList({ products }: IProductListProps) {
  return (
    <>
      <div className="section-products-list">
        <h2>Our Products</h2>
      </div>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard
            title={product.title}
            price={45}
            image="/img/schuhe.jpeg"
            description="Coole Adidas Schuhe"
          />
        ))}
      </div>
    </>
  );
}
