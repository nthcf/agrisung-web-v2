"use client";

import { Trigger } from "@radix-ui/react-dialog";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useId, useState } from "react";

import { trackRfqFormInteraction } from "@/analytics";

import Button from "../common/Button";
import RfqMainForm from "./RfqMainForm";

export default function RfqForm2() {
  const [product, setProduct] = useState("");
  const [fk, setFk] = useState(0);
  const productFieldId = useId();

  const { data: session } = useSession();
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6">
      <div className="text-center">
        <p className="text-fg-text-main-hc font-bold">
          {t("form.createRfq.title2")}
        </p>
        <p className="text-fg-text-main-hc text-sm">
          {t("form.createRfq.subtitle2")}
        </p>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <label
          htmlFor={productFieldId}
          className="text-fg-text-main-hc cursor-pointer text-sm"
        >
          {t("form.createRfq.label")}
        </label>
        <input
          id={productFieldId}
          className="border-fg-border-main-lc text-fg-text-main-hc placeholder:text-fg-text-main-lc focus:border-fg-border-brand w-48 rounded-sm border px-3 py-2 text-sm focus:ring-0"
          placeholder={t("form.createRfq.placeholder")}
          value={product}
          onChange={(e) => {
            setProduct(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center gap-1">
        <RfqMainForm
          key={fk}
          trigger={
            <Trigger asChild>
              <Button
                color="primary"
                onClick={() => {
                  trackRfqFormInteraction("open", session, {
                    trigger: "form2",
                  });
                }}
              >
                {t("form.createRfq.submitButton")}
              </Button>
            </Trigger>
          }
          productName={product}
          onReset={() => {
            setFk(fk + 1);
          }}
        />
      </div>
    </div>
  );
}
