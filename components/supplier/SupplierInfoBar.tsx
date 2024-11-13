import { cx } from "class-variance-authority";
import Image from "next/image";

import { type Supplier } from "@/libs/cms";

type SupplierInfoBarProps = {
  data: Supplier;
} & React.ComponentPropsWithoutRef<"div">;

export default function SupplierInfoBar({
  className,
  data,
}: SupplierInfoBarProps) {
  return (
    <div
      className={cx(
        "flex items-center gap-2 rounded bg-gradient-to-r from-bg-brand-bright/15 via-bg-brand/15 to-bg-brand-deep/15 p-2",
        className,
      )}
    >
      <div className="relative size-8 overflow-hidden rounded border border-fg-border-main bg-bg-brand-bright">
        {data.logoMedia && (
          <Image
            src={data.logoMedia.url}
            alt={data.name}
            fill
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
      <p className="text-xs text-fg-text-main-hc">
        <span className="underline">{data.name}</span> &bull;{" "}
        {data.yearEstablished} &bull; {data.country?.name}
      </p>
    </div>
  );
}
