import { useTranslations } from "next-intl";
import Image from "next/image";

import { type Supplier } from "@/libs/cms";

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
          <div className="ovherflow-hidden relative size-25 rounded border border-fg-border-main bg-bg-brand-bright">
            {data.logoMedia && (
              <Image
                src={data.logoMedia.url}
                alt={data.name}
                fill
                style={{ objectFit: "contain" }}
              />
            )}
          </div>
          <div>
            <p className="text-lg font-medium text-fg-text-main-hc">
              {data.name}
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
              {data.certifications?.map((item) => (
                <div
                  key={item.id}
                  className="relative size-20 overflow-hidden rounded bg-bg-brand-bright"
                >
                  {item.logoMedia && (
                    <Image
                      src={item.logoMedia.url}
                      alt={item.name}
                      sizes="100%"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  )}
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
