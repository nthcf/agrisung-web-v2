import { ChevronRight } from "lucide-react";

import { Link } from "@/i18n/routing";

import Button from "../common/Button";

type BannerProps = {
  data: {
    style: "horizontal" | "vertical";
  };
};

function BannerHorizontal({ data }: BannerProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-bg-brand-bright px-6 py-13">
      <div className="relative z-10 flex items-center justify-between">
        <h3 className="text-fg-text-on-main-hc text-x2xl font-semibold">
          banner.title
        </h3>
        <Button
          as={Link}
          href="/banner.link"
          color="transparent-white"
          size="sm"
        >
          <span>banner.cta</span>
          <ChevronRight size={16} />
        </Button>
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
}

function BannerVertical({ data }: BannerProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-bg-brand-bright px-34 py-13">
      <div className="relative z-10 flex flex-col items-center justify-between gap-1">
        <h3 className="text-fg-text-on-main-hc text-2xl font-bold">
          banner.title
        </h3>
        <h4 className="text-lg font-bold text-fg-text-on-main">
          banner.subtitle
        </h4>
        <p className="text-sm text-fg-text-on-main">banner.description</p>
        <Button
          as={Link}
          href="/banner.link"
          className="mt-4"
          color="transparent-white"
          size="sm"
        >
          <span>banner.cta</span>
          <ChevronRight size={16} />
        </Button>
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
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
