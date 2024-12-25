"use client";

import { cx } from "cva";
import { useSession } from "next-auth/react";
import { useFormatter, useTranslations } from "next-intl";
import Image from "next/image";

import { trackProductClick, trackSupplierClick } from "@/analytics";
import { Link } from "@/i18n/routing";
import { type Product } from "@/libs/cms";

type ProductCardProps = {
  contentClassname?: string;
  data: Product;
  featured?: boolean;
} & React.ComponentPropsWithoutRef<"article">;

export default function ProductCard({
  className,
  contentClassname,
  data,
  featured,
}: ProductCardProps) {
  const { data: session } = useSession();
  const t = useTranslations();
  const format = useFormatter();

  const currency = data.currency?.alphabeticCode ?? "VND";

  return (
    <article
      className={cx(
        "relative overflow-hidden rounded-lg border border-transparent bg-white",
        className,
      )}
    >
      {featured && (
        <h3 className="text-fg-text-main-hc pt-1 pb-3 text-sm font-bold">
          {t("page.homepage.featuredSection.product")}
        </h3>
      )}
      <Link
        href={`/product/${data.slug}`}
        onClick={() => {
          trackProductClick(data, session, { featured });
        }}
      >
        <div
          className={cx(
            "bg-bg-brand-bright relative w-full overflow-hidden rounded-sm",
            featured ? "aspect-[4_/_3]" : "aspect-square",
          )}
        >
          <div className="absolute top-2 left-2 z-10">
            {/* <Tag>items[0].tag</Tag> */}
          </div>
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
        <h4 className="text-fg-text-main-hc max-h-10 truncate text-sm font-medium text-ellipsis">
          <Link
            href={`/product/${data.slug}`}
            onClick={() => {
              trackProductClick(data, session, { featured });
            }}
          >
            {data.name}
          </Link>
        </h4>
        <div className="text-fg-text-main text-xs">
          <p className="line-clamp-2 h-8 whitespace-pre-wrap">
            {data.description}
          </p>
        </div>
        <p className="text-fg-text-main-hc line-clamp-2 h-8 text-xs font-medium underline">
          {data.supplier && (
            <Link
              href={`/supplier/${data.supplier.slug}`}
              onClick={() => {
                trackSupplierClick(data.supplier!, session, {
                  click_at: "product_card",
                });
              }}
            >
              {data.supplier.name}
            </Link>
          )}
        </p>
        <p className="text-fg-text-main-hc font-bold">
          {data.priceMin > 0
            ? format.number(data.priceMin, {
                style: "currency",
                currency,
              })
            : "N/A"}
          {" - "}
          {data.priceMax > 0
            ? format.number(data.priceMax, {
                style: "currency",
                currency,
              })
            : "N/A"}
          <span className="text-fg-text-main text-sm font-medium"> / kg</span>
        </p>
      </div>
    </article>
  );
}
