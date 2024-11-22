import { useTranslations } from "next-intl";
import Image from "next/image";

import { Link } from "@/i18n/routing";
import { type Supplier } from "@/libs/cms";
import SupplierCert from "./SupplierCert";

type SupplierInfoTableProps = {
  data: Supplier;
  hideLogo?: boolean;
};

export default function SupplierInfoTable({
  data,
  hideLogo,
}: SupplierInfoTableProps) {
  const t = useTranslations();

  return (
    <div>
      {!hideLogo && (
        <div className="flex items-center gap-3">
          <Link
            className="ovherflow-hidden relative size-25 rounded border border-fg-border-main bg-bg-brand-bright"
            href={`/supplier/${data.slug}`}
          >
            {data.logoMedia && (
              <Image
                src={data.logoMedia.url}
                alt={data.name}
                fill
                style={{ objectFit: "contain" }}
              />
            )}
          </Link>
          <div>
            <p className="text-lg font-medium text-fg-text-main-hc">
              <Link href={`/supplier/${data.slug}`}>{data.name}</Link>
            </p>
            <p className="text-sm font-medium text-fg-text-brand underline">
              {t("shared.productWithCount2", {
                count: data.products?.length ?? 0,
              })}
            </p>
          </div>
        </div>
      )}
      <table className="mt-4 w-full text-sm">
        <tbody>
          <tr>
            <th className="w-48 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
              {t("page.supplierDetail.companyName")}
            </th>
            <td className="border border-fg-border-main p-3 text-fg-text-main">
              {data.name}
            </td>
          </tr>
          <tr>
            <th className="w-48 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
              {t("page.supplierDetail.businessType")}
            </th>
            <td className="border border-fg-border-main p-3 text-fg-text-main">
              {data.businessType}
            </td>
          </tr>
          <tr>
            <th className="w-48 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
              {t("page.supplierDetail.exportHistory")}
            </th>
            <td className="border border-fg-border-main p-3 text-fg-text-main">
              {data.exportHistory?.map((item) => item.name).join(", ")}
            </td>
          </tr>
          <tr>
            <th className="w-48 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
              {t("page.supplierDetail.numberOfEmployees")}
            </th>
            <td className="border border-fg-border-main p-3 text-fg-text-main">
              {data.numberOfEmployees}
            </td>
          </tr>
          <tr>
            <th className="w-48 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
              {t("page.supplierDetail.annualSalesRevenue")}
            </th>
            <td className="border border-fg-border-main p-3 text-fg-text-main">
              {data.annualSalesRevenue}
            </td>
          </tr>
          <tr>
            <th className="w-48 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
              {t("page.supplierDetail.yearEstablished")}
            </th>
            <td className="border border-fg-border-main p-3 text-fg-text-main">
              {data.yearEstablished}
            </td>
          </tr>
          <tr>
            <th className="w-48 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
              {t("page.supplierDetail.country")}
            </th>
            <td className="border border-fg-border-main p-3 text-fg-text-main">
              {data.country?.name}
            </td>
          </tr>
          <tr>
            <th className="w-48 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
              {t("page.supplierDetail.companyAddress")}
            </th>
            <td className="border border-fg-border-main p-3 text-fg-text-main">
              {data.address}
            </td>
          </tr>
          <tr>
            <th className="w-48 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
              {t("page.supplierDetail.certificates")}
            </th>
            <td className="border border-fg-border-main p-3 text-fg-text-main">
              <div className="jusify-start flex flex-wrap gap-4">
                {data.certifications?.map((item) => (
                  <SupplierCert key={item.id} data={item} />
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
