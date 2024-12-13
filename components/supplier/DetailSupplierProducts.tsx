import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";
import { type Product } from "@/libs/cms";

import ProductCard from "../product/ProductCard";

type DetailSupplierProductsProps = {
  data: Product[];
  slug: string;
  hideViewAll?: boolean;
};

export default function DetailSupplierProducts({
  data,
  slug,
  hideViewAll,
}: DetailSupplierProductsProps) {
  const t = useTranslations();

  return (
    <div className="space-y-4 rounded-lg bg-white p-4">
      <div className="flex justify-between">
        <h2 className="text-x2xl text-fg-text-main-hc font-bold">
          {t("shared.products")} ({data.length})
        </h2>
        {!hideViewAll && (
          <Link
            className="text-fg-text-brand inline-flex items-center text-sm font-medium"
            href={`/supplier/${slug}/product`}
          >
            <span>{t("shared.viewAll")}</span>
            <span className="icon-[octicon--chevron-right-16] size-4" />
          </Link>
        )}
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            className="border-fg-border-main-disable!"
            contentClassname="p-3"
            data={product}
          />
        ))}
      </div>
    </div>
  );
}
