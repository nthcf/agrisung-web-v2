import { ChevronRight } from "lucide-react";
import Image from "next/image";

import { Link } from "@/i18n/routing";
import { type Banner as TBanner } from "@/libs/cms";

import Button from "./Button";

type BannerProps = {
  data: TBanner;
};

function BannerHorizontal({ data }: BannerProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-bg-brand-bright px-6 py-13">
      {data.imgMedia && (
        <Image
          src={data.imgMedia.url}
          alt={data.title}
          sizes="100%"
          fill
          style={{ objectFit: "cover" }}
        />
      )}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative flex items-center justify-between">
        <h3 className="text-x2xl font-semibold text-fg-text-on-main-hc">
          {data.title}
        </h3>
        <Button
          as={Link}
          href={data.ctaLink}
          color="transparent-white"
          size="sm"
        >
          <span>{data.ctaTitle}</span>
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
}

function BannerVertical({ data }: BannerProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-bg-brand-bright px-34 py-13">
      {data.imgMedia && (
        <Image
          src={data.imgMedia.url}
          alt={data.title}
          sizes="100%"
          fill
          style={{ objectFit: "cover" }}
        />
      )}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative flex flex-col items-center justify-between gap-1">
        <h3 className="text-2xl font-bold text-fg-text-on-main-hc">
          {data.title}
        </h3>
        <h4 className="text-lg font-bold text-fg-text-on-main">
          {data.subtitle}
        </h4>
        <p className="text-sm text-fg-text-on-main"> {data.description}</p>
        <Button
          as={Link}
          href={data.ctaLink}
          className="mt-4"
          color="transparent-white"
          size="sm"
        >
          <span>{data.ctaTitle}</span>
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
}

export default function Banner({ data }: BannerProps) {
  switch (data.style) {
    case "horizontal":
      return <BannerHorizontal data={data} />;
    case "vertical":
      return <BannerVertical data={data} />;
    default:
      return null;
  }
}
