import { useTranslations } from "next-intl";

import { type Product } from "@/libs/cms";

import ProductCard from "../product/ProductCard";

type ResultProps = {
  data: Product[];
};

export default function Result({ data }: ResultProps) {
  const t = useTranslations();

  return (
    <div className="mt-4 grid grid-cols-4 gap-3">
      {data.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}
