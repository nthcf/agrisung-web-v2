import { useTranslations } from "next-intl";

import ProductCard from "../product/ProductCard";

export default function ProductList() {
  const t = useTranslations();
  return (
    <section>
      <h2 className="text-x2xl font-bold text-fg-text-main-hc">
        {t("page.homepage.productListSection.title")}
      </h2>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {[...Array(4 * 5)].map((_, i) => (
          <ProductCard key={i} data="" />
        ))}
      </div>
    </section>
  );
}
