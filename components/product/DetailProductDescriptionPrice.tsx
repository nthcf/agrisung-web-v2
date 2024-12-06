import { useFormatter, useTranslations } from "next-intl";

import { type Product, type Supplier } from "@/libs/cms";

import DetailProductDescriptionCta from "./DetailProductDescriptionCta";

type DetailProductDescriptionPriceProps = {
  product: Product;
  supplier: Supplier;
};

export default function DetailProductDescriptionPrice({
  product,
  supplier,
}: DetailProductDescriptionPriceProps) {
  const t = useTranslations();
  const format = useFormatter();

  return (
    <div className="space-y-4 rounded-lg bg-white p-4">
      <div className="space-y-1">
        <p className="text-xs text-fg-text-main">
          {t("page.productDetail.referencePricePerKg")}
        </p>
        <p className="font-heading text-x4xl font-bold text-fg-text-brand-hover">
          {product.priceMin
            ? format.number(product.priceMin, {
                style: "currency",
                currency: product.currency?.alphabeticCode || "VND",
              })
            : "N/A"}
          {" - "}
          {product.priceMax
            ? format.number(product.priceMax, {
                style: "currency",
                currency: product.currency?.alphabeticCode || "VND",
              })
            : "N/A"}
        </p>
        <p className="text-sm font-medium text-fg-text-main">
          {t("page.productDetail.moq")}: {product.moq}
        </p>
      </div>
      <hr />
      <div className="space-y-1">
        <h4 className="text-sm font-bold text-fg-text-main-hc">
          {t("page.productDetail.aboutThisProduct")}
        </h4>
        <p className="max-h-30 overflow-auto whitespace-pre-wrap text-sm text-fg-text-main">
          {product.description}
        </p>
      </div>
      <DetailProductDescriptionCta product={product} supplier={supplier} />
    </div>
  );
}
