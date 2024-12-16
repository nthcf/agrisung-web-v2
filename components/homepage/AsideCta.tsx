"use client";

import { Trigger } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";
import { useState } from "react";

import Button from "../common/Button";
import RfqMainForm from "../form/RfqMainForm";

export default function AsideCta() {
  const [fk, setFk] = useState(0);

  const t = useTranslations();

  return (
    <div className="rounded-lg bg-white p-3">
      <p className="text-fg-text-main-hc text-sm font-medium">
        {t("page.homepage.aside.rfqTitle")}
      </p>
      <div className="mt-3 flex items-center gap-1">
        <RfqMainForm
          key={fk}
          trigger={
            <Trigger asChild>
              <Button className="flex-1">
                {t("page.homepage.aside.rfqButton")}
              </Button>
            </Trigger>
          }
          onReset={() => {
            setFk(fk + 1);
          }}
        />
      </div>
    </div>
  );
}
