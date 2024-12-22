import { cx } from "cva";
import { useFormatter } from "next-intl";
import Image from "next/image";

import { Link } from "@/i18n/routing";
import { type News } from "@/libs/cms";

import {
  cardVariants,
  contentVariants,
  imageVariants,
  titleVariants,
} from "./news-card-variants";

type NewsCardProps = React.ComponentPropsWithoutRef<"article"> & {
  data: News;
};

export default function NewsCardHorizontal({ className, data }: NewsCardProps) {
  const format = useFormatter();

  return (
    <Link href={`/news/${data.slug}`}>
      <article className={cx(cardVariants({ axis: "horizontal" }), className)}>
        <div className={imageVariants({ axis: "horizontal" })}>
          <Image
            src={data.coverMedia.url}
            alt={data.title}
            fill
            sizes="100%"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className={contentVariants({ axis: "horizontal" })}>
          <p className="text-brand-gray-6 text-sm font-semibold">
            {format.dateTime(new Date(data.publishedAt), {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <h3 className={titleVariants({ axis: "horizontal" })}>
            {data.title}
          </h3>
          <p className="text-brand-gray-6 mt-3 line-clamp-2 text-base">
            {data.excerpt}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {data.tags?.split(",").map((tag, i) => (
              <span
                key={tag.trim() + "-" + i}
                className="bg-bg-brand-bright text-fg-border-brand inline-flex h-6 items-center rounded-full px-3 text-sm"
              >
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
