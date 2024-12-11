"use client";

import { cx } from "class-variance-authority";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

import { type Supplier } from "@/libs/cms";

import Button from "../common/Button";

type DetailSupplierHeaderProps = {
  data: Supplier;
};

export default function DetailSupplierHeader({
  data,
}: DetailSupplierHeaderProps) {
  const [expandDesc, setExpandDesc] = useState(false);

  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 lg:px-20 xl:px-34">
      <div className="flex gap-6">
        <div className="relative -mt-10 size-45 shrink-0 rounded border border-fg-border-main bg-bg-brand-bright">
          {data.logoMedia && (
            <Image
              src={data.logoMedia.url}
              alt={data.name}
              sizes="100%"
              fill
              style={{ objectFit: "contain" }}
            />
          )}
        </div>
        <div className="flex flex-1 justify-between gap-3 pt-6">
          <div className="relative">
            <h1 className="text-2xl font-bold text-fg-text-main-hc">
              {data.name}
            </h1>
            <p
              className={cx(
                "whitespace-pre-wrap text-sm text-fg-text-main",
                !expandDesc && "line-clamp-4",
              )}
            >
              {data.description}
            </p>
            {!expandDesc && (
              <Button
                className="absolute -bottom-2 right-0"
                color="ghost-primary"
                size="sm"
                onClick={() => {
                  setExpandDesc(true);
                }}
              >
                <span>{t("shared.viewAll")}</span>
                <span className="icon-[octicon--chevron-down-16] size-[14px]" />
              </Button>
            )}
          </div>
          <Button className="shrink-0" color="gray">
            <span className="icon-[octicon--bookmark-16] size-5" />
            <span>{t("shared.save")}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
