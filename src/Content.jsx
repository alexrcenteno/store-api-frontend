import { ProductsIndex } from "./ProductsIndex";

export function Content() {
  const products = [
    { id: 1, name: "first", url: "https://via.placeholder.com/150", price: 100, description: "test", quantity: 100 },
    { id: 2, name: "second", url: "https://via.placeholder.com/300", price: 200, description: "test", quantity: 300 },
  ];

  return (
    <div>
      <ProductsIndex products={products} />
    </div>
  );
}
