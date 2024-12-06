import { cx } from "class-variance-authority";
import { useFormatter, useTranslations } from "next-intl";
import Image from "next/image";

import { Link } from "@/i18n/routing";
import { type Product } from "@/libs/cms";

type ProductCardProps = {
  data: Product;
  featured?: boolean;
  contentClassname?: string;
} & React.ComponentPropsWithoutRef<"article">;

export default function ProductCard({
  className,
  data,
  featured,
  contentClassname,
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
        <h3 className="pb-3 pt-1 text-sm font-bold text-fg-text-main-hc">
          {t("page.homepage.featuredSection.product")}
        </h3>
      )}
      <Link href={`/product/${data.slug}`}>
        <div
          className={cx(
            "relative w-full overflow-hidden rounded bg-bg-brand-bright",
            featured ? "aspect-[4_/_3]" : "aspect-square",
          )}
        >
          <div className="absolute left-2 top-2 z-10">
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
        <h4 className="max-h-10 truncate text-ellipsis text-sm font-medium text-fg-text-main-hc">
          <Link href={`/product/${data.slug}`}>{data.name}</Link>
        </h4>
        <div className="text-xs text-fg-text-main">
          <p className="line-clamp-2 whitespace-pre-wrap">{data.description}</p>
        </div>
        <p className="line-clamp-2 h-8 text-xs font-medium text-fg-text-main-hc underline">
          <Link href={`/supplier/${data.supplier?.slug}`}>
            {data.supplier?.name}
          </Link>
        </p>
        <p className="font-bold text-fg-text-main-hc">
          {data.priceMin
            ? format.number(data.priceMin, {
                style: "currency",
                currency: data.currency?.alphabeticCode || "VND",
              })
            : "N/A"}
          {" - "}
          {data.priceMax
            ? format.number(data.priceMax, {
                style: "currency",
                currency: data.currency?.alphabeticCode || "VND",
              })
            : "N/A"}
          <span className="text-sm font-medium text-fg-text-main"> / kg</span>
        </p>
      </div>
    </article>
  );
}
