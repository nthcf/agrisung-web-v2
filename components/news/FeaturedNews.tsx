import { useTranslations } from "next-intl";

import { type News } from "@/libs/cms";

import FeaturedNewsGrid from "./FeaturedNewsGrid";

type FeaturedNewsProps = {
  data: News[];
};

export default function FeaturedNews({ data }: FeaturedNewsProps) {
  const t = useTranslations();

  return (
    <section className="rounded bg-white p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-x2xl text-fg-text-main-hc font-bold">
          {t("page.news.featured")}
        </h2>
      </div>
      <FeaturedNewsGrid data={data} />
    </section>
  );
}
