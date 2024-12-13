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
            className="border-fg-border-main bg-bg-brand-bright relative size-25 overflow-hidden rounded-sm border"
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
            <p className="text-fg-text-main-hc text-lg font-medium">
              <Link href={`/supplier/${data.slug}`}>{data.name}</Link>
            </p>
            <p className="text-fg-text-brand text-sm font-medium underline">
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
            <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-48 border p-3 text-left font-normal">
              {t("page.supplierDetail.companyName")}
            </th>
            <td className="border-fg-border-main text-fg-text-main border p-3">
              {data.name}
            </td>
          </tr>
          <tr>
            <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-48 border p-3 text-left font-normal">
              {t("page.supplierDetail.businessType")}
            </th>
            <td className="border-fg-border-main text-fg-text-main border p-3">
              {data.businessType}
            </td>
          </tr>
          <tr>
            <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-48 border p-3 text-left font-normal">
              {t("page.supplierDetail.exportHistory")}
            </th>
            <td className="border-fg-border-main text-fg-text-main border p-3">
              {data.exportHistories?.map((item) => item.name).join(", ")}
            </td>
          </tr>
          <tr>
            <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-48 border p-3 text-left font-normal">
              {t("page.supplierDetail.numberOfEmployees")}
            </th>
            <td className="border-fg-border-main text-fg-text-main border p-3">
              {data.numberOfEmployees}
            </td>
          </tr>
          <tr>
            <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-48 border p-3 text-left font-normal">
              {t("page.supplierDetail.annualSalesRevenue")}
            </th>
            <td className="border-fg-border-main text-fg-text-main border p-3">
              {data.annualSalesRevenue}
            </td>
          </tr>
          <tr>
            <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-48 border p-3 text-left font-normal">
              {t("page.supplierDetail.yearEstablished")}
            </th>
            <td className="border-fg-border-main text-fg-text-main border p-3">
              {data.yearEstablished}
            </td>
          </tr>
          <tr>
            <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-48 border p-3 text-left font-normal">
              {t("page.supplierDetail.country")}
            </th>
            <td className="border-fg-border-main text-fg-text-main border p-3">
              {data.country?.name}
            </td>
          </tr>
          <tr>
            <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-48 border p-3 text-left font-normal">
              {t("page.supplierDetail.companyAddress")}
            </th>
            <td className="border-fg-border-main text-fg-text-main border p-3">
              {data.address}
            </td>
          </tr>
          <tr>
            <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-48 border p-3 text-left font-normal">
              {t("page.supplierDetail.certificates")}
            </th>
            <td className="border-fg-border-main text-fg-text-main border p-3">
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
