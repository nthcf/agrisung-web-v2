import { cx } from "class-variance-authority";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { Link } from "@/i18n/routing";
import { type Supplier } from "@/libs/cms";

import Button from "../common/Button";

type SupplierCardProps = {
  data: Supplier;
  featured?: boolean;
  contentClassname?: string;
} & React.ComponentPropsWithoutRef<"article">;

export default function SupplierCard({
  className,
  data,
  featured,
  contentClassname,
}: SupplierCardProps) {
  const t = useTranslations();

  return (
    <article
      className={cx("relative overflow-hidden rounded-lg bg-white", className)}
    >
      {featured && (
        <h3 className="pb-3 pt-1 text-sm font-bold text-fg-text-main-hc">
          {t("page.homepage.featuredSection.supplier")}
        </h3>
      )}
      <Link href={`/supplier/${data.slug}`}>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-bg-brand-bright">
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
        <div className={cx("space-y-1", contentClassname)}>
          <h4 className="line-clamp-1 max-h-10 text-sm font-medium text-fg-text-main-hc">
            {data.name}
          </h4>
          <p className="text-xs text-fg-text-main">
            {data.businessType} &bull; {data.yearEstablished}
          </p>
          <div className="text-xs text-fg-text-main-hc">
            <p className="line-clamp-2 whitespace-pre-wrap">
              {data.description}
            </p>
          </div>
          <div className="!mt-3 flex items-center gap-2">
            <Button color="gray" size="sm">
              {t("shared.contactNow")}
            </Button>
          </div>
        </div>
      </Link>
    </article>
  );
}
