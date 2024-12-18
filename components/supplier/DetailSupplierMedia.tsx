/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";

import { type Supplier } from "@/libs/cms";

import Lightbox from "../common/Lightbox";

type DetailSupplierMediaProps = {
  data: Supplier;
};

export default function DetailSupplierMedia({
  data,
}: DetailSupplierMediaProps) {
  const t = useTranslations();

  if (data.medias.length === 0 && !data.youtubeId) {
    return null;
  }

  return (
    <div className="rounded-lg bg-white p-3">
      <h2 className="text-x2xl text-fg-text-main-hc font-bold">
        {t("page.supplierDetail.photosAndVideos")} (
        {data.medias.length + (data.youtubeId ? 1 : 0)})
      </h2>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {data.youtubeId && (
          <div>
            <Lightbox data={data.youtubeId}>
              <div className="border-fg-border-main relative aspect-square cursor-pointer overflow-hidden rounded-sm border">
                <img
                  className="h-full w-full object-cover"
                  src={`https://i.ytimg.com/vi/${data.youtubeId}/hqdefault.jpg`}
                  alt="Video"
                />
              </div>
            </Lightbox>
          </div>
        )}
        {data.medias.map((media, i) => (
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
          </div>
        ))}
      </div>
    </div>
  );
}
