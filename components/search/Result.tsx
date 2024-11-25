import { type Product } from "@/libs/cms";

import ProductCard from "../product/ProductCard";

type ResultProps = {
  data: Product[];
};

export default function Result({ data }: ResultProps) {
  return (
    <div className="mt-4 grid grid-cols-4 gap-3">
      {data.map((product) => (
        <ProductCard key={product.id} contentClassname="p-3" data={product} />
      ))}
    </div>
  );
}
