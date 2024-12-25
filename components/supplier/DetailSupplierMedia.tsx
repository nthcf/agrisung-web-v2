import { useTranslations } from "next-intl";

import { type Supplier } from "@/libs/cms";

import DetailSupplierMediaItem from "./DetailSupplierMediaItem";

type DetailSupplierMediaProps = {
  data: Supplier;
};

export default function DetailSupplierMedia({
  data,
}: DetailSupplierMediaProps) {
  const t = useTranslations();

  if ((!data.medias || data.medias.length === 0) && !data.youtubeId) {
    return null;
  }

  return (
    <div className="rounded-lg bg-white p-3">
      <h2 className="text-x2xl text-fg-text-main-hc font-bold">
        {t("page.supplierDetail.photosAndVideos")} (
        {(data.medias?.length ?? 0) + (data.youtubeId ? 1 : 0)})
      </h2>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {data.youtubeId && (
          <DetailSupplierMediaItem data={data.youtubeId} supplier={data} />
        )}
        {data.medias?.map((media, i) => (
          <DetailSupplierMediaItem key={i} data={media} supplier={data} />
        ))}
      </div>
    </div>
  );
}
