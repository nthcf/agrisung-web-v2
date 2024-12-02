import { cx } from "class-variance-authority";
import Image from "next/image";

import { Link } from "@/i18n/routing";
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
      <Link
        className="relative size-8 overflow-hidden rounded border border-fg-border-main bg-bg-brand-bright"
        href={`/supplier/${data.slug}`}
      >
        {data.logoMedia && (
          <Image
            src={data.logoMedia.url}
            alt={data.name}
            sizes="100%"
            fill
            style={{ objectFit: "contain" }}
          />
        )}
      </Link>
      <p className="text-xs text-fg-text-main-hc">
        <Link href={`/supplier/${data.slug}`}>
          <span className="underline">{data.name}</span>
        </Link>{" "}
        &bull; {data.yearEstablished} &bull; {data.country?.name}
      </p>
    </div>
  );
}
