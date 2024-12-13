import Image from "next/image";

import { type Supplier } from "@/libs/cms";

type DetailSupplierCoverProps = {
  data: Supplier;
};

export default function DetailSupplierCover({
  data,
}: DetailSupplierCoverProps) {
  return (
    <div className="mx-auto">
      <div className="bg-bg-brand-bright relative aspect-64/9">
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
    </div>
  );
}
