import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";
import { type Supplier } from "@/libs/cms";

import Button from "../common/Button";
import SupplierInfoTable from "../supplier/SupplierInfoTable";

type DetailProductSupplierProps = {
  data: Supplier;
};

export default function DetailProductSupplier({
  data,
}: DetailProductSupplierProps) {
  const t = useTranslations();

  return (
    <div className="space-y-4 rounded-lg bg-white p-4">
      <h2 className="text-x2xl text-fg-text-main-hc font-bold">
        {t("page.productDetail.aboutTheSupplier")}
      </h2>
      <SupplierInfoTable data={data} />
      <div>
        <Button as={Link} href={`/supplier/${data.slug}`}>
          {t("page.productDetail.supplierCta")}
        </Button>
      </div>
    </div>
  );
}
