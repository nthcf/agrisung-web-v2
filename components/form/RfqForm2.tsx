"use client";

import { CircleHelp } from "lucide-react";
import { useTranslations } from "next-intl";
import { useId } from "react";

import Button from "../common/Button";

export default function RfqForm2() {
  const productFieldId = useId();
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6">
      <div className="text-center">
        <p className="font-bold text-fg-text-main-hc">
          Can’t find the right product that you need?
        </p>
        <p className="text-sm text-fg-text-main-hc">
          Inform supplier of your sourcing needs and discover the best deals.
        </p>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <label
          htmlFor={productFieldId}
          className="cursor-pointer text-sm text-fg-text-main-hc"
        >
          {t("form.createRfq.label")}
        </label>
        <input
          id={productFieldId}
          className="w-48 rounded border border-fg-border-main-lc px-3 py-2 text-sm text-fg-text-main-hc placeholder:text-fg-text-main-lc focus:border-fg-border-brand focus:ring-0"
          placeholder={t("form.createRfq.placeholder")}
        />
      </div>
      <div className="flex items-center gap-1">
        <Button color="primary">{t("form.createRfq.submitButton")}</Button>
        <Button color="ghost-gray" size="icon-lg">
          <CircleHelp size={24} />
        </Button>
      </div>
    </div>
  );
}
