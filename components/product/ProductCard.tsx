import { cx } from "class-variance-authority";

import Tag from "../common/Tag";

type ProductCardProps = {
  data: string;
} & React.ComponentPropsWithoutRef<"article">;

export default function ProductCard({ className, data }: ProductCardProps) {
  return (
    <article
      className={cx("relative overflow-hidden rounded-lg bg-white", className)}
    >
      {data && (
        <h3 className="p-4 pb-3 text-sm font-bold text-fg-text-main-hc">
          card title
        </h3>
      )}
      <div className="relative aspect-square w-full overflow-hidden bg-bg-brand-bright">
        <div className="absolute left-2 top-2">
          <Tag>items[0].tag</Tag>
        </div>
      </div>
      <div className="space-y-1 p-3">
        <h4 className="max-h-10 text-ellipsis text-sm font-medium text-fg-text-main-hc">
          items[0].title
        </h4>
        <div className="text-xs text-fg-text-main">
          <p>items[0].description</p>
          <p>items[0].description2</p>
        </div>
        <p className="text-xs font-medium text-fg-text-main-hc underline">
          items[0].subtitle
        </p>
        <p className="font-bold text-fg-text-main-hc">items[0].price</p>
      </div>
    </article>
  );
}
