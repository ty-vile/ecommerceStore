// types
import { Product } from "@/types/types";
// image
import Image from "next/image";

type Props = {
  products: Product[];
  filter: string;
};

const ProductGrid = ({ products, filter }: Props) => {
  console.log(products);

  switch (filter) {
    case "recent":
      products.sort((a: Product, b: Product) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA;
      });
      products = products.slice(0, 4);
      break;
    default:
      products = products;
      break;
  }

  return (
    <div className="w-full grid grid-cols-1 gap:4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-8">
      {products.map((product, i) => (
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold font-lato">{product.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
