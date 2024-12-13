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
          <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-36 border p-3 text-left font-normal">
            {t("page.productDetail.productName")}
          </th>
          <td className="border-fg-border-main text-fg-text-main border p-3">
            {data.name}
          </td>
        </tr>
        <tr>
          <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-36 border p-3 text-left font-normal">
            {t("page.productDetail.rawProduct")}
          </th>
          <td className="border-fg-border-main text-fg-text-main border p-3">
            {data.rawProduct?.name}
          </td>
        </tr>
        <tr>
          <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-36 border p-3 text-left font-normal">
            {t("page.productDetail.productType")}
          </th>
          <td className="border-fg-border-main text-fg-text-main border p-3">
            {data.processType?.name}
          </td>
        </tr>
        <tr>
          <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-36 border p-3 text-left font-normal">
            {t("page.productDetail.processStyle")}
          </th>
          <td className="border-fg-border-main text-fg-text-main border p-3">
            {data.processedStyle}
          </td>
        </tr>
        <tr>
          <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-36 border p-3 text-left font-normal">
            {t("page.productDetail.variety")}
          </th>
          <td className="border-fg-border-main text-fg-text-main border p-3">
            {data.varieties.map((v) => v.variety).join(", ")}
          </td>
        </tr>
        <tr>
          <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-36 border p-3 text-left font-normal">
            {t("page.productDetail.countryOfOrigin")}
          </th>
          <td className="border-fg-border-main text-fg-text-main border p-3">
            {data.origin?.name}
          </td>
        </tr>
        <tr>
          <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-36 border p-3 text-left font-normal">
            {t("page.productDetail.samples")}
          </th>
          <td className="border-fg-border-main text-fg-text-main border p-3">
            {data.samples.map((s) => s.sample).join(", ")}
          </td>
        </tr>
        <tr>
          <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-36 border p-3 text-left font-normal">
            {t("page.productDetail.ingredients")}
          </th>
          <td className="border-fg-border-main text-fg-text-main border p-3">
            {data.ingredients}
          </td>
        </tr>
        <tr>
          <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-36 border p-3 text-left font-normal">
            {t("page.productDetail.shelfLife")}
          </th>
          <td className="border-fg-border-main text-fg-text-main border p-3">
            {data.shelfLife}
          </td>
        </tr>
        <tr>
          <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-36 border p-3 text-left font-normal">
            {t("page.productDetail.paymentTerms")}
          </th>
          <td className="border-fg-border-main text-fg-text-main border p-3">
            {data.paymentTerms.map((p) => p.paymentTerm).join(", ")}
          </td>
        </tr>
        <tr>
          <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-36 border p-3 text-left font-normal">
            {t("page.productDetail.shipment")}
          </th>
          <td className="border-fg-border-main text-fg-text-main border p-3">
            {data.shipments.map((s) => s.shipment).join(", ")}
          </td>
        </tr>
        <tr>
          <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-36 border p-3 text-left font-normal">
            {t("page.productDetail.moq")}
          </th>
          <td className="border-fg-border-main text-fg-text-main border p-3">
            {data.moq}
          </td>
        </tr>
        <tr>
          <th className="border-fg-border-main bg-bg-main-bright text-fg-text-main-hc w-36 border p-3 text-left font-normal">
            {t("page.productDetail.packagingType")}
          </th>
          <td className="border-fg-border-main text-fg-text-main border p-3">
            {data.packagingType}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
