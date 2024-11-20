import { cx } from "class-variance-authority";
import { useFormatter, useTranslations } from "next-intl";
import Image from "next/image";
import { draw } from "radash";

import { Link } from "@/i18n/routing";
import { type Product } from "@/libs/cms";

type ProductCardProps = {
  data: Product;
  featured?: boolean;
} & React.ComponentPropsWithoutRef<"article">;

export default function ProductCard({
  className,
  data,
  featured,
}: ProductCardProps) {
  const t = useTranslations();
  const format = useFormatter();

  return (
    <article
      className={cx(
        "relative overflow-hidden rounded-lg border border-transparent bg-white",
        className,
      )}
    >
      {featured && (
        <h3 className="p-4 pb-3 text-sm font-bold text-fg-text-main-hc">
          {t("page.homepage.featuredSection.product")}
        </h3>
      )}
      <Link href={`/product/${data.slug}`}>
        <div className="relative aspect-square w-full overflow-hidden bg-bg-brand-bright">
          <div className="absolute left-2 top-2 z-10">
            {/* <Tag>items[0].tag</Tag> */}
          </div>
          {data.coverMedia && (
            <Image
              src={data.coverMedia.url}
              alt={data.name}
              sizes="100%"
              fill
              style={{ objectFit: "contain" }}
            />
          )}
        </div>
        <div className="space-y-1 p-3">
          <h4 className="max-h-10 truncate text-ellipsis text-sm font-medium text-fg-text-main-hc">
            {data.name}
          </h4>
          <div className="text-xs text-fg-text-main">
            <p className="line-clamp-2 whitespace-pre-wrap">
              {data.description}
            </p>
          </div>
          <p className="h-4 truncate text-xs font-medium text-fg-text-main-hc underline">
            {draw(data.suppliers || [])?.name}
          </p>
          <p className="font-bold text-fg-text-main-hc">
            {data.priceMin
              ? format.number(data.priceMin, {
                  style: "currency",
                  currency: data.currency,
                })
              : "N/A"}
            {" - "}
            {data.priceMax
              ? format.number(data.priceMax, {
                  style: "currency",
                  currency: data.currency,
                })
              : "N/A"}
          </p>
        </div>
      </Link>
    </article>
  );
}
