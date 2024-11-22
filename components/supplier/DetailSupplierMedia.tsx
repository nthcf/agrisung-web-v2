/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";

import { Media } from "@/libs/cms";

import Lightbox from "../common/Lightbox";

type DetailSupplierMediaProps = {
  data: Media[];
};

export default function DetailSupplierMedia({
  data,
}: DetailSupplierMediaProps) {
  const t = useTranslations();

  return (
    <div className="rounded-lg bg-white p-3">
      <h2 className="text-x2xl font-bold text-fg-text-main-hc">
        {t("page.supplierDetail.photosAndVideos")} ({data.length})
      </h2>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {data.map((media, i) => (
          <div key={i}>
            <Lightbox data={media}>
              <div className="relative aspect-square cursor-pointer overflow-hidden rounded border border-fg-border-main">
                <img
                  className="h-full w-full object-cover"
                  src={media.url}
                  alt={media.name}
                />
              </div>
            </Lightbox>
            <p className="mt-3 text-sm text-fg-text-main-hc">{media.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
