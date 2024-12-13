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
        "from-bg-brand-bright/15 via-bg-brand/15 to-bg-brand-deep/15 flex items-center gap-2 rounded-sm bg-linear-to-r p-2",
        className,
      )}
    >
      <Link
        className="border-fg-border-main bg-bg-brand-bright relative size-8 overflow-hidden rounded-sm border"
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
      <p className="text-fg-text-main-hc text-xs">
        <Link href={`/supplier/${data.slug}`}>
          <span className="underline">{data.name}</span>
        </Link>{" "}
        &bull; {data.yearEstablished} &bull; {data.country?.name}
      </p>
    </div>
  );
}
