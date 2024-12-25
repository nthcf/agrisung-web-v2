"use client";

import { Trigger } from "@radix-ui/react-dialog";
import { cx } from "cva";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useId, useState } from "react";

import { trackRfqFormInteraction } from "@/analytics";

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
  const [fk, setFk] = useState(0);
  const productFieldId = useId();

  const { data: session } = useSession();
  const t = useTranslations();

  return (
    <div
      className={cx(
        "flex items-center gap-6 rounded-lg bg-white p-6",
        className,
      )}
    >
      <span className="icon-[mdi--text-box-edit-outline] text-fg-icon-main-lc size-14 shrink-0" />
      <div className="flex-1">
        <h4 className="text-fg-text-main-hc font-bold">
          {t("form.createRfq.title")}
        </h4>
        {!hideDescription && (
          <p className="text-fg-text-main text-sm">
            {t("form.createRfq.subtitle")}
          </p>
        )}
        {!hideProductField && (
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
        )}
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
                    trigger: "form1",
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
