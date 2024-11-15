import { useTranslations } from "next-intl";

import { type Supplier } from "@/libs/cms";

import SupplierInfoTable from "./SupplierInfoTable";

type DetailSupplierOverviewProps = {
  data: Supplier;
};

export default function DetailSupplierOverview({
  data,
}: DetailSupplierOverviewProps) {
  const t = useTranslations();

  return (
    <div className="rounded-lg bg-white p-3">
      <h2 className="text-x2xl font-bold text-fg-text-main-hc">
        {t("page.supplierDetail.companyOverview")}
      </h2>
      <SupplierInfoTable data={data} hideLogo />
    </div>
  );
}
