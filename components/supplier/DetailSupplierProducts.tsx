import { ChevronRight } from "lucide-react";
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
        <h2 className="text-x2xl font-bold text-fg-text-main-hc">
          {t("shared.products")} ({data.length})
        </h2>
        {!hideViewAll && (
          <Link
            className="inline-flex items-center text-sm font-medium text-fg-text-brand"
            href={`/supplier/${slug}/product`}
          >
            <span>{t("shared.viewAll")}</span>
            <ChevronRight size={16} />
          </Link>
        )}
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            className="!border-fg-border-main-disable"
            data={product}
          />
        ))}
      </div>
    </div>
  );
}
