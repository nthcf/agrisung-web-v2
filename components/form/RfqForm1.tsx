"use client";

import { Trigger } from "@radix-ui/react-dialog";
import { cx } from "class-variance-authority";
import { useTranslations } from "next-intl";
import { useId, useState } from "react";

import Button from "../common/Button";
import RfqMainForm from "./RfqMainForm";

type RfqForm1Props = {
  hideDescription?: boolean;
  hideProductField?: boolean;
} & React.ComponentPropsWithoutRef<"div">;

export default function RfqForm1({
  className,
  hideDescription,
  hideProductField,
}: RfqForm1Props) {
  const [product, setProduct] = useState("");
  const productFieldId = useId();
  const t = useTranslations();

  return (
    <div
      className={cx(
        "flex items-center gap-6 rounded-lg bg-white p-6",
        className,
      )}
    >
      <span className="icon-[mdi--text-box-edit-outline] size-14 shrink-0 text-fg-icon-main-lc" />
      <div className="flex-1">
        <h4 className="font-bold text-fg-text-main-hc">
          {t("form.createRfq.title")}
        </h4>
        {!hideDescription && (
          <p className="text-sm text-fg-text-main">
            {t("form.createRfq.subtitle")}
          </p>
        )}
        {!hideProductField && (
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
              value={product}
              onChange={(e) => {
                setProduct(e.target.value);
              }}
            />
          </div>
        )}
      </div>
      <div className="flex items-center gap-1">
        <RfqMainForm
          trigger={
            <Trigger asChild>
              <Button color="primary">
                {t("form.createRfq.submitButton")}
              </Button>
            </Trigger>
          }
          productName={product}
        />
      </div>
    </div>
  );
}
