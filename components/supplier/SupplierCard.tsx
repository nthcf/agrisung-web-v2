"use client";

import { cx } from "cva";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { unique } from "radash";

import { trackSupplierClick } from "@/analytics";
import { Link } from "@/i18n/routing";
import { type Supplier } from "@/libs/cms";

import Button from "../common/Button";

type SupplierCardProps = {
  data: Supplier;
  contentClassname?: string;
  featured?: boolean;
  noRoundedBottom?: boolean;
} & React.ComponentPropsWithoutRef<"article">;

export default function SupplierCard({
  className,
  data,
  contentClassname,
  featured,
  noRoundedBottom,
}: SupplierCardProps) {
  const { data: session } = useSession();
  const t = useTranslations();

  const rawProducts = unique(
    (data.products || [])
      .filter((p) => !!p.rawProduct)
      .map((p) => p.rawProduct!.name),
  );

  return (
    <article
      className={cx("relative overflow-hidden rounded-lg bg-white", className)}
    >
      {featured && (
        <h3 className="text-fg-text-main-hc pt-1 pb-3 text-sm font-bold">
          {t("page.homepage.featuredSection.supplier")}
        </h3>
      )}
      <Link
        href={`/supplier/${data.slug}`}
        onClick={() => {
          trackSupplierClick(data, session, { featured });
        }}
      >
        <div
          className={cx(
            "bg-bg-brand-bright relative aspect-video w-full overflow-hidden rounded-t-lg",
            noRoundedBottom ? "" : "rounded-b-lg",
          )}
        >
          {data.coverMedia && (
            <Image
              src={data.coverMedia.url}
              alt={data.name}
              sizes="100%"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      </Link>
      <div className={cx("space-y-1", contentClassname)}>
        <div className="flex gap-2">
          <div className="flex-1">
            <h4 className="text-fg-text-main-hc line-clamp-1 max-h-10 text-sm font-medium">
              <Link
                href={`/supplier/${data.slug}`}
                onClick={() => {
                  trackSupplierClick(data, session, { featured });
                }}
              >
                {data.name}
              </Link>
            </h4>
            <p className="text-fg-text-main mt-1 line-clamp-1 text-xs">
              {data.businessType} &bull; {data.yearEstablished}
            </p>
          </div>
          <Link
            href={`/supplier/${data.slug}`}
            onClick={() => {
              trackSupplierClick(data, session, { featured });
            }}
          >
            <div className="bg-bg-brand-bright border-fg-border-main-disable relative h-10 w-10 rounded-sm border">
              {data.logoMedia && (
                <Image
                  src={data.logoMedia.url}
                  alt={data.name}
                  sizes="100%"
                  fill
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>
          </Link>
        </div>
        <div className="text-fg-text-main-hc text-xs">
          <p className="line-clamp-1">
            {t("shared.products")}
            {": "}
            {rawProducts.length > 0 ? rawProducts.join(", ") : t("shared.na")}
          </p>
        </div>
        <div className="text-fg-text-main-hc text-xs">
          <p className="line-clamp-1">
            {t("page.supplierDetail.exportHistory")}
            {": "}
            {data.exportHistories
              ? data.exportHistories.map((h) => h.name).join(", ")
              : t("shared.na")}
          </p>
        </div>
        <div className="mt-3! flex items-center gap-2">
          <Button
            as={Link}
            href={`/supplier/${data.slug}`}
            color="gray"
            size="sm"
            onClick={() => {
              trackSupplierClick(data, session, { featured });
            }}
          >
            {t("shared.viewProfile")}
          </Button>
        </div>
      </div>
    </article>
  );
}
