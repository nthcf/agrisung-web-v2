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
      <h2 className="text-x2xl text-fg-text-main-hc font-bold">
        {t("page.supplierDetail.photosAndVideos")} ({data.length})
      </h2>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {data.map((media, i) => (
          <div key={i}>
            <Lightbox data={media}>
              <div className="border-fg-border-main relative aspect-square cursor-pointer overflow-hidden rounded-sm border">
                <img
                  className="h-full w-full object-cover"
                  src={media.url}
                  alt={media.name}
                />
              </div>
            </Lightbox>
            <p className="text-fg-text-main-hc mt-3 text-sm">{media.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
