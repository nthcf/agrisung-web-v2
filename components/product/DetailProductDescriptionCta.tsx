"use client";

import { Trigger } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";

import { type Product, type Supplier } from "@/libs/cms";

import Button from "../common/Button";
import RfqMainForm from "../form/RfqMainForm";

type DetailProductDescriptionCtaProps = {
  product: Product;
  supplier: Supplier;
};

export default function DetailProductDescriptionCta({
  product,
  supplier,
}: DetailProductDescriptionCtaProps) {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-2">
      <RfqMainForm
        product={product}
        supplier={supplier}
        trigger={
          <Trigger asChild>
            <Button color="primary">
              <span className="icon-[octicon--goal-16] size-5" />
              <span>{t("page.productDetail.cta1")}</span>
            </Button>
          </Trigger>
        }
      />
      <Button>{t("page.productDetail.cta2")}</Button>
    </div>
  );
}
