import { useTranslations } from "next-intl";

import { type Product } from "@/libs/cms";

import ProductSpecsTable from "./ProductSpecsTable";

type DetailProductSpecsProps = {
  data: Product;
};

export default function DetailProductSpecs({ data }: DetailProductSpecsProps) {
  const t = useTranslations();

  return (
    <div className="space-y-4 rounded-lg bg-white p-4">
      <h2 className="text-x2xl text-fg-text-main-hc font-bold">
        {t("page.productDetail.productDescription")}
      </h2>
      <ProductSpecsTable data={data} />
    </div>
  );
}
