import { useTranslations } from "next-intl";

import { type Product } from "@/libs/cms";

type ProductSpecsTableProps = {
  data: Product;
};

export default function ProductSpecsTable({ data }: ProductSpecsTableProps) {
  const t = useTranslations();

  return (
    <table className="w-full text-sm">
      <tbody>
        <tr>
          <th className="w-36 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
            {t("page.productDetail.productName")}
          </th>
          <td className="border border-fg-border-main p-3 text-fg-text-main">
            {data.name}
          </td>
        </tr>
        <tr>
          <th className="w-36 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
            {t("page.productDetail.rawProduct")}
          </th>
          <td className="border border-fg-border-main p-3 text-fg-text-main">
            {data.rawProduct?.name}
          </td>
        </tr>
        <tr>
          <th className="w-36 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
            {t("page.productDetail.productType")}
          </th>
          <td className="border border-fg-border-main p-3 text-fg-text-main">
            {data.processType?.name}
          </td>
        </tr>
        <tr>
          <th className="w-36 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
            {t("page.productDetail.processStyle")}
          </th>
          <td className="border border-fg-border-main p-3 text-fg-text-main">
            {data.processedStyle}
          </td>
        </tr>
        <tr>
          <th className="w-36 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
            {t("page.productDetail.variety")}
          </th>
          <td className="border border-fg-border-main p-3 text-fg-text-main">
            {data.variety}
          </td>
        </tr>
        <tr>
          <th className="w-36 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
            {t("page.productDetail.countryOfOrigin")}
          </th>
          <td className="border border-fg-border-main p-3 text-fg-text-main">
            {data.origin?.name}
          </td>
        </tr>
        <tr>
          <th className="w-36 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
            {t("page.productDetail.samples")}
          </th>
          <td className="border border-fg-border-main p-3 text-fg-text-main">
            {data.samples}
          </td>
        </tr>
        <tr>
          <th className="w-36 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
            {t("page.productDetail.ingredients")}
          </th>
          <td className="border border-fg-border-main p-3 text-fg-text-main">
            {data.ingredients}
          </td>
        </tr>
        <tr>
          <th className="w-36 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
            {t("page.productDetail.shelfLife")}
          </th>
          <td className="border border-fg-border-main p-3 text-fg-text-main">
            {data.shelfLife}
          </td>
        </tr>
        <tr>
          <th className="w-36 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
            {t("page.productDetail.paymentTerms")}
          </th>
          <td className="border border-fg-border-main p-3 text-fg-text-main">
            {data.paymentTerms}
          </td>
        </tr>
        <tr>
          <th className="w-36 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
            {t("page.productDetail.shipment")}
          </th>
          <td className="border border-fg-border-main p-3 text-fg-text-main">
            {data.shipment}
          </td>
        </tr>
        <tr>
          <th className="w-36 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
            {t("page.productDetail.moq")}
          </th>
          <td className="border border-fg-border-main p-3 text-fg-text-main">
            {data.moq}
          </td>
        </tr>
        <tr>
          <th className="w-36 border border-fg-border-main bg-bg-main-bright p-3 text-left font-normal text-fg-text-main-hc">
            {t("page.productDetail.packagingType")}
          </th>
          <td className="border border-fg-border-main p-3 text-fg-text-main">
            {data.packagingType}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
