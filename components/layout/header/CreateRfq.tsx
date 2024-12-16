"use client";

import { Trigger } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";
import { useState } from "react";

import Button from "@/components/common/Button";
import RfqMainForm from "@/components/form/RfqMainForm";

export default function CreateRfq() {
  const [fk, setFk] = useState(0);

  const t = useTranslations();

  return (
    <RfqMainForm
      key={fk}
      trigger={
        <Trigger asChild>
          <Button>
            <span className="icon-[octicon--goal-16] size-5" />
            <span>{t("shared.createMyRfq")}</span>
          </Button>
        </Trigger>
      }
      onReset={() => {
        setFk(fk + 1);
      }}
    />
  );
}
