import { Target } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";

import { type Product } from "@/libs/cms";

import Button from "../common/Button";

type DetailProductDescriptionPriceProps = {
  data: Product;
};

export default function DetailProductDescriptionPrice({
  data,
}: DetailProductDescriptionPriceProps) {
  const format = useFormatter();
  const t = useTranslations();

  return (
    <div className="space-y-4 rounded-lg bg-white p-4">
      <div className="space-y-1">
        <p className="text-xs text-fg-text-main">
          {t("page.productDetail.referencePricePerKg")}
        </p>
        <p className="text-x4xl font-heading font-bold text-fg-text-brand-hover">
          {data.priceMin
            ? format.number(data.priceMin, {
                style: "currency",
                currency: data.currency,
              })
            : "N/A"}
          {" - "}
          {data.priceMax
            ? format.number(data.priceMax, {
                style: "currency",
                currency: data.currency,
              })
            : "N/A"}
        </p>
        <p className="text-sm font-medium text-fg-text-main">
          {t("page.productDetail.moq")}: {data.moq}
        </p>
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-bold text-fg-text-main-hc">
          {t("page.productDetail.aboutThisProduct")}
        </h4>
        <p className="text-sm text-fg-text-main">{data.description}</p>
      </div>
      <div className="flex flex-col gap-2">
        <Button color="primary">
          <Target size={20} />
          <span>{t("page.productDetail.cta1")}</span>
        </Button>
        <Button>{t("page.productDetail.cta2")}</Button>
      </div>
    </div>
  );
}
