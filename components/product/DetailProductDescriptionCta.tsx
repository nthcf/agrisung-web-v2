"use client";

import { Trigger } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";

import Button from "../common/Button";
import RfqMainForm from "../form/RfqMainForm";

export default function DetailProductDescriptionCta() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-2">
      <RfqMainForm
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
