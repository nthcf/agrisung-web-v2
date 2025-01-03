"use client";

import { Trigger } from "@radix-ui/react-dialog";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { trackRfqFormInteraction } from "@/analytics";
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
  const [fk1, setFk1] = useState(0);
  const [fk2, setFk2] = useState(-1);

  const { data: session } = useSession();
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-2">
      <RfqMainForm
        key={fk1}
        product={product}
        supplier={supplier}
        trigger={
          <Trigger asChild>
            <Button
              color="primary"
              onClick={() => {
                trackRfqFormInteraction("open", session, {
                  trigger: "product_aside",
                });
              }}
            >
              <span className="icon-[octicon--goal-16] size-5" />
              <span>{t("page.productDetail.cta1")}</span>
            </Button>
          </Trigger>
        }
        onReset={() => {
          setFk1(fk1 + 1);
        }}
      />
      <RfqMainForm
        key={fk2}
        supplier={supplier}
        trigger={
          <Trigger asChild>
            <Button
              onClick={() => {
                trackRfqFormInteraction("open", session, {
                  trigger: "product_aside_customize",
                });
              }}
            >
              {t("page.productDetail.cta2")}
            </Button>
          </Trigger>
        }
        onReset={() => {
          setFk2(fk2 - 1);
        }}
      />
    </div>
  );
}
