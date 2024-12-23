import Image from "next/image";

import { Link } from "@/i18n/routing";
import { type Banner as TBanner } from "@/libs/cms";

import Button from "./Button";

type BannerProps = {
  data: TBanner;
};

type BannerImageProps = BannerProps & {
  wrapLink?: boolean;
};

type InnerBannerProps = BannerProps & {
  withText?: boolean;
};

function BannerImage({ data, wrapLink }: BannerImageProps) {
  if (wrapLink) {
    return (
      <Link href={data.ctaLink}>
        <Image
          src={data.imgMedia.url}
          alt={data.title ?? "Agri Sung"}
          sizes="100%"
          fill
          style={{ objectFit: "cover" }}
        />
      </Link>
    );
  }

  return (
    <Image
      src={data.imgMedia.url}
      alt={data.title ?? "Agri Sung"}
      sizes="100%"
      fill
      style={{ objectFit: "cover" }}
    />
  );
}

function Banner64_9({ data, withText }: InnerBannerProps) {
  return (
    <div className="bg-bg-brand-bright relative aspect-64/9 overflow-hidden rounded-sm px-6 py-13">
      {data.imgMedia && <BannerImage data={data} wrapLink={!withText} />}
      {data.dimImage && <div className="absolute inset-0 bg-black/50"></div>}
      {withText && (
        <div className="relative flex items-center justify-between">
          <h3 className="text-x2xl text-fg-text-on-main-hc font-semibold">
            {data.title}
          </h3>
          <Button
            as={Link}
            href={data.ctaLink}
            color="transparent-white"
            size="sm"
          >
            <span>{data.ctaTitle}</span>
            <span className="icon-[octicon--chevron-right-16] size-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

function Banner32_9({ data, withText }: InnerBannerProps) {
  return (
    <div className="bg-bg-brand-bright relative aspect-32/9 overflow-hidden rounded-sm px-34 py-13">
      {data.imgMedia && <BannerImage data={data} wrapLink={!withText} />}
      {data.dimImage && <div className="absolute inset-0 bg-black/50"></div>}
      {withText && (
        <div className="relative flex flex-col items-center justify-between gap-1">
          <h3 className="text-fg-text-on-main-hc text-2xl font-bold">
            {data.title}
          </h3>
          <h4 className="text-fg-text-on-main text-lg font-bold">
            {data.subtitle}
          </h4>
          <p className="text-fg-text-on-main text-sm"> {data.description}</p>
          <Button
            as={Link}
            href={data.ctaLink}
            className="mt-4"
            color="transparent-white"
            size="sm"
          >
            <span>{data.ctaTitle}</span>
            <span className="icon-[octicon--chevron-right-16] size-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

export default function Banner({ data }: BannerProps) {
  switch (data.style) {
    case "image_only-32_9":
      return <Banner32_9 data={data} />;
    case "image_only-64_9":
      return <Banner64_9 data={data} />;
    case "with_text-32_9":
      return <Banner32_9 data={data} withText />;
    case "with_text-64_9":
      return <Banner64_9 data={data} withText />;
    default:
      return null;
  }
}
