import { useTranslations } from "next-intl";

import { type Product } from "@/libs/cms";

import ProductCard from "../product/ProductCard";

type ProductListProps = {
  data: Product[];
};

export default function ProductList({ data }: ProductListProps) {
  const t = useTranslations();

  return (
    <section>
      <h2 className="text-x2xl text-fg-text-main-hc font-bold">
        {t("page.homepage.productListSection.title")}
      </h2>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            className="border-0!"
            contentClassname="p-3 "
            data={product}
          />
        ))}
      </div>
    </section>
  );
}
