import { cx } from "class-variance-authority";
import { useTranslations } from "next-intl";

import Button from "../common/Button";
import { Bookmark } from "lucide-react";

type SupplierCardProps = {
  data: string;
} & React.ComponentPropsWithoutRef<"article">;

export default function SupplierCard({ className, data }: SupplierCardProps) {
  const t = useTranslations();

  return (
    <article
      className={cx("relative overflow-hidden rounded-lg bg-white", className)}
    >
      {data && (
        <h3 className="p-4 pb-3 text-sm font-bold text-fg-text-main-hc">
          card title
        </h3>
      )}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-bg-brand-bright"></div>
      <div className="space-y-1 p-3">
        <h4 className="max-h-10 text-ellipsis text-sm font-medium text-fg-text-main-hc">
          items[0].title
        </h4>
        <p className="text-xs text-fg-text-main">items[0].subtitle</p>
        <div className="text-xs text-fg-text-main-hc">
          <p>items[0].description</p>
          <p>items[0].description2</p>
        </div>
        <div className="!mt-3 flex items-center gap-2">
          <Button color="gray" size="sm">
            {t("shared.contact")}
          </Button>
          <Button color="gray" size="icon-sm">
            <Bookmark size={14} />
          </Button>
        </div>
      </div>
    </article>
  );
}
