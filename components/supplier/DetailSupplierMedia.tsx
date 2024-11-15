import { useTranslations } from "next-intl";
import Image from "next/image";

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
          <Lightbox key={i} data={media}>
            <div className="relative aspect-square cursor-pointer overflow-hidden rounded">
              <Image
                src={media.url}
                alt={media.name}
                sizes="100%"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </Lightbox>
        ))}
      </div>
    </div>
  );
}
