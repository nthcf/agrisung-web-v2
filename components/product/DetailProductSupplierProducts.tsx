import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";
import { type Product } from "@/libs/cms";

import ProductCard from "./ProductCard";

type DetailProductSupplierProductsProps = {
  data: Product[];
  slug: string;
  total: number;
};

export default function DetailProductSupplierProducts({
  data,
  slug,
  total,
}: DetailProductSupplierProductsProps) {
  const t = useTranslations();

  return (
    <div className="space-y-4 rounded-lg bg-white p-4">
      <div className="flex justify-between">
        <h2 className="text-x2xl text-fg-text-main-hc font-bold">
          {t("page.productDetail.otherProductsFromTheSupplier")}
        </h2>
        {total > 8 && (
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
