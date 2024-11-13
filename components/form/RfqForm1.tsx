"use client";

import { cx } from "class-variance-authority";
import { CircleHelp, FilePen } from "lucide-react";
import { useTranslations } from "next-intl";
import { useId } from "react";

import Button from "../common/Button";

type RfqForm1Props = {} & React.ComponentPropsWithoutRef<"div">;

export default function RfqForm1({ className }: RfqForm1Props) {
  const productFieldId = useId();
  const t = useTranslations();

  return (
    <div
      className={cx(
        "flex items-center gap-6 rounded-lg bg-white p-6",
        className,
      )}
    >
      <FilePen className="shrink-0 text-fg-icon-main-lc" size={56} />
      <div className="flex-1">
        <h4 className="font-bold text-fg-text-main-hc">
          {t("form.createRfq.title")}
        </h4>
        <p className="text-sm text-fg-text-main">
          {t("form.createRfq.subtitle")}
        </p>
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
