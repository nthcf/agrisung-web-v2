import { Bookmark } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { type Supplier } from "@/libs/cms";

import Button from "../common/Button";

type DetailSupplierHeaderProps = {
  data: Supplier;
};

export default function DetailSupplierHeader({
  data,
}: DetailSupplierHeaderProps) {
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
          <div>
            <h1 className="text-2xl font-bold text-fg-text-main-hc">
              {data.name}
            </h1>
            <p className="whitespace-pre-wrap text-sm text-fg-text-main">
              {data.description}
            </p>
          </div>
          <Button className="shrink-0" color="gray">
            <Bookmark size={20} />
            <span>{t("shared.save")}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
