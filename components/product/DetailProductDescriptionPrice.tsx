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
        <p className="text-fg-text-main text-xs">
          {t("page.productDetail.referencePricePerKg")}
        </p>
        <p className="font-heading text-x4xl text-fg-text-brand-hover font-bold">
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
        <p className="text-fg-text-main text-sm font-medium">
          {t("page.productDetail.moq")}: {product.moq}
        </p>
      </div>
      <hr />
      <div className="space-y-1">
        <h4 className="text-fg-text-main-hc text-sm font-bold">
          {t("page.productDetail.aboutThisProduct")}
        </h4>
        <p className="text-fg-text-main max-h-30 overflow-auto text-sm whitespace-pre-wrap">
          {product.description}
        </p>
      </div>
      <DetailProductDescriptionCta product={product} supplier={supplier} />
    </div>
  );
}
